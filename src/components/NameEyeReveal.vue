<!-- src/components/NameEyeReveal.vue -->
<script setup>
import {
  ref,
  reactive,
  computed,
  onMounted,
  onBeforeUnmount,
  nextTick,
} from "vue";

const props = defineProps({
  name: { type: String, required: true },
  to: { type: String, default: "/about" },
});

const originalChars = props.name.split("");
const length = originalChars.length;
const half = Math.floor(length / 2);
const pupilIndex = half;

const fillerIndices = new Set();
for (let i = 2; i <= length - 3; i++) {
  if (i !== pupilIndex) fillerIndices.add(i);
}

const chars = ref([...originalChars]);
const pulsing = reactive(new Array(length).fill(false));
const isAnimating = ref(false);

const revealedCount = ref(0);
const initialTypeDone = ref(false);

const visibleIndices = computed(() => {
  const count = initialTypeDone.value ? length : revealedCount.value;
  return Array.from({ length: count }, (_, i) => i);
});

const showTooltip = ref(false);
const tooltipX = ref(0);
const tooltipY = ref(0);
const TOOLTIP_OFFSET_X = 14;
const TOOLTIP_OFFSET_Y = 18;

function handleMouseEnter(e) {
  if (!initialTypeDone.value) return;
  showTooltip.value = true;
  tooltipX.value = e.clientX + TOOLTIP_OFFSET_X;
  tooltipY.value = e.clientY + TOOLTIP_OFFSET_Y;
  runAnimation();
}
function handleMouseMove(e) {
  if (!showTooltip.value) return;
  tooltipX.value = e.clientX + TOOLTIP_OFFSET_X;
  tooltipY.value = e.clientY + TOOLTIP_OFFSET_Y;
}
function handleMouseLeave() {
  showTooltip.value = false;
}

let timeouts = [];
function schedule(fn, delay) {
  const id = setTimeout(fn, delay);
  timeouts.push(id);
}
function clearAllTimeouts() {
  timeouts.forEach(clearTimeout);
  timeouts = [];
}

function setChar(i, ch) {
  chars.value[i] = ch;
  pulsing[i] = false;
  nextTick(() => {
    pulsing[i] = true;
    schedule(() => (pulsing[i] = false), 140);
  });
}

// onMounted typing effect
function typeInName() {
  const STEP = 90;
  const start = performance.now();
  let lastRevealed = 0;

  function tick(now) {
    const elapsed = now - start;
    const shouldBeRevealed = Math.min(Math.floor(elapsed / STEP) + 1, length);

    if (shouldBeRevealed > lastRevealed) {
      for (let i = lastRevealed; i < shouldBeRevealed; i++) {
        revealedCount.value = i + 1;
        pulsing[i] = false;
        nextTick(() => {
          pulsing[i] = true;
          schedule(() => (pulsing[i] = false), 140);
        });
      }
      lastRevealed = shouldBeRevealed;
    }

    if (lastRevealed < length) {
      requestAnimationFrame(tick);
    } else {
      initialTypeDone.value = true;
    }
  }

  requestAnimationFrame(tick);
}

// turn name into the eye
function buildEyeTarget() {
  const arr = new Array(length).fill("-");
  for (let i = 0; i < half; i++) {
    let l = "-",
      r = "-";
    if (i === 0) {
      l = "<";
      r = ">";
    } else if (i === 1) {
      l = "(";
      r = ")";
    }
    arr[i] = l;
    arr[length - 1 - i] = r;
  }
  arr[pupilIndex] = "O";
  return arr;
}

function isCollapsed(i) {
  return fillerIndices.has(i) && chars.value[i] !== originalChars[i];
}

// run eye blink animation
function runAnimation() {
  if (isAnimating.value) return;
  isAnimating.value = true;
  clearAllTimeouts();

  const eyeTarget = buildEyeTarget();

  // Positions of the "iris" brackets
  const irisLeft = 1;
  const irisRight = length - 2;

  const STEP_DISSOLVE = 30;
  const STEP_FORM = 100;
  let t = 0;

  // ── Phase 1: name dissolves to blank, outside-in ──
  for (let p = 0; p < half; p++) {
    schedule(() => {
      setChar(p, "\u00A0");
      setChar(length - 1 - p, "\u00A0");
    }, t);
    t += STEP_DISSOLVE;
  }
  if (length % 2 === 1) {
    schedule(() => setChar(half, "\u00A0"), t);
    t += STEP_DISSOLVE;
  }

  t += 80; // brief pause, fully blank

  // ── Phase 2: eye forms outside-in — sides, then brackets, then pupil ──
  for (let p = 0; p < half; p++) {
    schedule(() => {
      setChar(p, eyeTarget[p]);
      setChar(length - 1 - p, eyeTarget[length - 1 - p]);
    }, t);
    t += STEP_FORM;
  }
  schedule(() => setChar(pupilIndex, eyeTarget[pupilIndex]), t);
  t += STEP_FORM;

  t += 350; // hold, fully formed eye

  // ── Phase 3: blink — iris brackets + pupil flatten to "-", outer < > stay ──
  schedule(() => {
    setChar(irisLeft, "-");
    setChar(pupilIndex, "-");
    setChar(irisRight, "-");
  }, t);
  t += 150;

  schedule(() => {
    setChar(irisLeft, eyeTarget[irisLeft]);
    setChar(pupilIndex, eyeTarget[pupilIndex]);
    setChar(irisRight, eyeTarget[irisRight]);
  }, t);
  t += 150;

  t += 250; // hold, eye reopened

  // ── Phase 4: eye dissolves from the pupil outward ──
  schedule(() => setChar(pupilIndex, "\u00A0"), t);
  t += STEP_FORM;

  for (let p = half - 1; p >= 0; p--) {
    schedule(() => {
      setChar(p, "\u00A0");
      setChar(length - 1 - p, "\u00A0");
    }, t);
    t += STEP_FORM;
  }

  t += 80; // brief pause, fully blank again

  // ── Phase 5: name reappears left-to-right ──
  for (let i = 0; i < length; i++) {
    schedule(() => setChar(i, originalChars[i]), t);
    t += 45;
  }

  schedule(() => (isAnimating.value = false), t + 50);
}

onMounted(() => {
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(typeInName);
  } else {
    typeInName(); // fallback for older browsers without the Font Loading API
  }
});
onBeforeUnmount(clearAllTimeouts);
</script>

<template>
  <router-link
    :to="to"
    :aria-label="name"
    @mouseenter="handleMouseEnter"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    class="inline-flex justify-center leading-none align-baseline text-magenta dark:text-tertiary"
    :style="initialTypeDone ? { width: `${length * 0.62}em` } : {}"
  >
    <span aria-hidden="true" class="font-mono leading-none inline-flex">
      <span
        v-for="i in visibleIndices"
        :key="i"
        class="char inline-block text-center align-baseline"
        :class="{ pulse: pulsing[i], collapsed: isCollapsed(i) }"
        >{{ chars[i] }}</span
      >
    </span>
  </router-link>

  <Teleport to="body">
    <div
      v-if="showTooltip"
      class="fixed z-50 pointer-events-none px-3 py-1 rounded-sm border border-magenta/60 dark:border-tertiary/60 bg-light dark:bg-darker_slate text-xs font-semibold text-magenta dark:text-tertiary shadow-md whitespace-nowrap transition-opacity duration-150"
      :style="{ left: `${tooltipX}px`, top: `${tooltipY}px` }"
    >
      About Me
    </div>
  </Teleport>
</template>

<style scoped>
.char {
  width: 0.62em;
  transition:
    width 0.15s ease,
    opacity 0.15s ease,
    transform 0.15s ease;
}
.collapsed {
  width: 0;
  overflow: hidden;
  opacity: 0;
}
.pulse {
  animation: charPop 0.22s ease;
}
@keyframes charPop {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
