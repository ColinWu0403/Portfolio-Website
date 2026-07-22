<script setup>
import { ref, onBeforeUnmount } from "vue";

const props = defineProps({
  text: { type: String, required: true },
});

// character set
const CHARS = "!<>-_\\/[]{}—=+*^?#89067&%#§¿";

const displayText = ref(props.text);
let frame = null;
let queue = [];

function scramble() {
  cancelAnimation();

  const SPEED_MULTIPLIER = 2.5;

  // Each letter gets its own start/end frame, staggered left-to-right via `i * 3`
  queue = props.text.split("").map((char, i) => {
    const start = Math.floor(Math.random() * 6 * SPEED_MULTIPLIER);
    const end =
      start +
      Math.floor(Math.random() * 10 * SPEED_MULTIPLIER) +
      i * 3 * SPEED_MULTIPLIER;
    return { char, start, end, current: "" };
  });

  let frameCount = 0;

  const update = () => {
    let output = "";
    let settled = 0;

    for (const letter of queue) {
      if (frameCount >= letter.end) {
        settled++;
        output += letter.char;
      } else if (frameCount >= letter.start) {
        if (!letter.current || Math.random() < 0.28) {
          letter.current = CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        output += letter.current;
      } else {
        output += letter.char;
      }
    }

    displayText.value = output;

    if (settled === queue.length) {
      cancelAnimation();
      displayText.value = props.text;
      return;
    }

    frameCount++;
    frame = requestAnimationFrame(update);
  };

  update();
}

function cancelAnimation() {
  if (frame) cancelAnimationFrame(frame);
  frame = null;
}

onBeforeUnmount(cancelAnimation);
</script>

<template>
  <span @mouseenter="scramble">{{ displayText }}</span>
</template>
