<!-- src/components/NameEyeReveal.vue -->
<script setup>
import { ref, reactive, onBeforeUnmount, nextTick } from "vue";

const props = defineProps({
  name: { type: String, required: true },
  to: { type: String, default: "/about" },
});

const originalChars = props.name.split("");
const length = originalChars.length;
const half = Math.floor(length / 2);
const pupilIndex = half;
// Only relevant for even-length names — this slot collapses to zero width
// whenever it's not showing the real letter, tightening <(--O-)> into <(-0-)>
const collapseIndex = length % 2 === 0 ? half - 1 : null;

const chars = ref([...originalChars]);
const pulsing = reactive(new Array(length).fill(false));
const isAnimating = ref(false);

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
  return i === collapseIndex && chars.value[i] !== originalChars[i];
}

function runAnimation() {
  if (isAnimating.value) return;
  isAnimating.value = true;
  clearAllTimeouts();

  const eyeTarget = buildEyeTarget();

  const STEP_DISSOLVE = 30;
  const STEP_FORM = 100;
  let t = 0;

  // Phase 1: name dissolves to blank, outside-in ripple
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

  t += 80;

  // Phase 2: eye forms outside-in — sides, then brackets, then pupil
  for (let p = 0; p < half; p++) {
    schedule(() => {
      setChar(p, eyeTarget[p]);
      setChar(length - 1 - p, eyeTarget[length - 1 - p]);
    }, t);
    t += STEP_FORM;
  }
  schedule(() => setChar(pupilIndex, eyeTarget[pupilIndex]), t);
  t += STEP_FORM;

  t += 350; // hold, fully formed

  // Phase 3: blink — only the pupil toggles, brackets stay put
  schedule(() => setChar(pupilIndex, "-"), t);
  t += 150;
  schedule(() => setChar(pupilIndex, eyeTarget[pupilIndex]), t);
  t += 150;

  t += 250; // hold, reopened

  // Phase 4: eye dissolves from the pupil outward
  schedule(() => setChar(pupilIndex, "\u00A0"), t);
  t += STEP_FORM;

  for (let p = half - 1; p >= 0; p--) {
    schedule(() => {
      setChar(p, "\u00A0");
      setChar(length - 1 - p, "\u00A0");
    }, t);
    t += STEP_FORM;
  }

  t += 80;

  // Phase 5: name reappears left-to-right
  for (let i = 0; i < length; i++) {
    schedule(() => setChar(i, originalChars[i]), t);
    t += 45;
  }

  schedule(() => (isAnimating.value = false), t + 50);
}

onBeforeUnmount(clearAllTimeouts);
</script>

<template>
  <router-link :to="to" :aria-label="name" @mouseenter="runAnimation">
    <span aria-hidden="true" class="font-mono">
      <span
        v-for="(c, i) in chars"
        :key="i"
        class="char inline-block text-center"
        :class="{ pulse: pulsing[i], collapsed: isCollapsed(i) }"
        >{{ c }}</span
      >
    </span>
  </router-link>
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
    transform: translateY(-3px) scale(0.7);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
