<!-- src/components/PixelSortImage.vue -->
<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  src: { type: String, required: true },
  duration: { type: Number, default: 1400 }, // ms for the wipe to complete
  lowThreshold: { type: Number, default: 40 }, // brightness range that gets sorted
  highThreshold: { type: Number, default: 220 }, // narrower range -> sparser; wider -> more chaotic
  bandWidth: { type: Number, default: 30 }, // larger = chunkier streaks
});

const canvasRef = ref(null);
let originalData = null;
let sortedData = null;
let width = 0;
let height = 0;
let rafId = null;
let currentRatio = 0; // tracks progress so reversing mid-flight is smooth

function brightness(data, i) {
  return (data[i] + data[i + 1] + data[i + 2]) / 3;
}

// Sorts pixels within contiguous "in-threshold" runs down each column
function buildSortedImage(imageData) {
  const sorted = new Uint8ClampedArray(imageData.data);

  for (let bandStart = 0; bandStart < width; bandStart += props.bandWidth) {
    const bandEnd = Math.min(bandStart + props.bandWidth, width);

    let y = 0;
    while (y < height) {
      // Determine run membership using the band's *average* brightness,
      // not a single column — this is what makes neighboring columns agree
      // on where a run starts/ends, producing a wide coherent streak.
      const avgBrightness = (() => {
        let total = 0;
        for (let x = bandStart; x < bandEnd; x++) {
          total += brightness(sorted, (y * width + x) * 4);
        }
        return total / (bandEnd - bandStart);
      })();

      if (
        avgBrightness >= props.lowThreshold &&
        avgBrightness <= props.highThreshold
      ) {
        const runStart = y;

        while (y < height) {
          let total = 0;
          for (let x = bandStart; x < bandEnd; x++) {
            total += brightness(sorted, (y * width + x) * 4);
          }
          const avg = total / (bandEnd - bandStart);
          if (avg < props.lowThreshold || avg > props.highThreshold) break;
          y++;
        }
        const runEnd = y; // exclusive

        // Sort each column in the band independently within the shared run range
        for (let x = bandStart; x < bandEnd; x++) {
          const run = [];
          for (let ry = runStart; ry < runEnd; ry++) {
            const i = (ry * width + x) * 4;
            run.push([sorted[i], sorted[i + 1], sorted[i + 2], sorted[i + 3]]);
          }
          run.sort((a, b2) => a[0] + a[1] + a[2] - (b2[0] + b2[1] + b2[2]));

          for (let ry = runStart; ry < runEnd; ry++) {
            const i = (ry * width + x) * 4;
            const [r, g, bch, a] = run[ry - runStart];
            sorted[i] = r;
            sorted[i + 1] = g;
            sorted[i + 2] = bch;
            sorted[i + 3] = a;
          }
        }
      } else {
        y++;
      }
    }
  }

  return new ImageData(sorted, width, height);
}

function compositeAt(progressRatio) {
  const ctx = canvasRef.value.getContext("2d");
  const revealRow = Math.floor(height * progressRatio);

  const composite = new Uint8ClampedArray(originalData.data.length);
  for (let y = 0; y < height; y++) {
    const source = y < revealRow ? sortedData.data : originalData.data;
    const rowStart = y * width * 4;
    for (let i = rowStart; i < rowStart + width * 4; i++) {
      composite[i] = source[i];
    }
  }

  ctx.putImageData(new ImageData(composite, width, height), 0, 0);
}

// Generic: animates from wherever currentRatio is, toward targetRatio (0 or 1)
function animateTo(targetRatio) {
  cancelAnimationFrame(rafId);

  const start = performance.now();
  const startRatio = currentRatio;
  const distance = targetRatio - startRatio;

  // Scale duration by how far it actually has to travel, so a reverse
  // triggered halfway through doesn't take the full `duration` to finish
  const scaledDuration = props.duration * Math.abs(distance);

  function step(now) {
    const elapsed = now - start;
    const t = scaledDuration === 0 ? 1 : Math.min(elapsed / scaledDuration, 1);
    currentRatio = startRatio + distance * t;
    compositeAt(currentRatio);

    if (t < 1) {
      rafId = requestAnimationFrame(step);
    }
  }

  rafId = requestAnimationFrame(step);
}

function sortDown() {
  animateTo(1);
}

function restoreUp() {
  animateTo(0);
}

onMounted(() => {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = () => {
    width = img.naturalWidth;
    height = img.naturalHeight;

    canvasRef.value.width = width;
    canvasRef.value.height = height;

    const ctx = canvasRef.value.getContext("2d");
    ctx.drawImage(img, 0, 0);

    originalData = ctx.getImageData(0, 0, width, height);
    sortedData = buildSortedImage(originalData);

    sortDown(); // auto-plays the initial wipe on load
  };
  img.src = props.src;
});

defineExpose({ sortDown, restoreUp });
</script>

<template>
  <canvas ref="canvasRef" class="w-full h-auto rounded"></canvas>
</template>
