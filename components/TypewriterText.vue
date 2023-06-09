<script setup lang="ts">
const props = defineProps<{
  displayTextArray: Array<string>;
  typingSpeed: number;
  erasingSpeed: number;
  repeatPauseDelay: number;
}>();

const emit = defineEmits<{
  (e: "typingStarted", val: string): void;
  (e: "eraseStarted"): void;
}>();

let typedValue = ref<string>("");
let typeStatus = ref(false);
let displayTextArrayIndex = ref(0);
let displayText = computed(
  () => props.displayTextArray[displayTextArrayIndex.value]
);
let charIndex = ref(0);

const typeText = () => {
  if (charIndex.value == 0) {
    emit("typingStarted", displayText.value);
  }
  if (charIndex.value < displayText.value.length) {
    typeStatus.value = true;
    typedValue.value += displayText.value.charAt(charIndex.value);
    charIndex.value += 1;
    setTimeout(typeText, props.typingSpeed);
  } else {
    typeStatus.value = false;
    setTimeout(eraseText, props.repeatPauseDelay);
  }
};

const eraseText = () => {
  if (charIndex.value == displayText.value.length - 1) {
    emit("eraseStarted");
  }

  if (charIndex.value > 0) {
    typeStatus.value = true;
    typedValue.value = typedValue.value.slice(0, -1);
    charIndex.value -= 1;
    setTimeout(eraseText, props.erasingSpeed);
  } else {
    typeStatus.value = false;
    displayTextArrayIndex.value += 1;
    if (displayTextArrayIndex.value >= props.displayTextArray.length) {
      displayTextArrayIndex.value = 0;
    }
    setTimeout(typeText, props.typingSpeed);
  }
};

onMounted(() => {
  setTimeout(typeText, 0);
});
</script>

<template>
  <span>
    <span class="typing-effect">
      &nbsp;{{ typedValue }}&nbsp;
    </span>
  </span>
</template>

<style scoped>
.blinking-cursor {
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}

@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #ffffff;
  }
}

@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #000000;
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: #2c3e50;
  }
}
</style>
