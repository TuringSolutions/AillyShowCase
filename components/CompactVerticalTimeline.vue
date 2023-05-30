<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/20/solid";

const props = defineProps<{ events: Array<{title:string, body: string}>, timeOut : number }>();

let currentEventIndex = ref<number>(0);
let incrementCurrentIndex = () => {
  if (currentEventIndex.value == props.events.length) {
    currentEventIndex.value = 0
  } else {
    currentEventIndex.value += 1
  }
}

onMounted(() => setInterval(incrementCurrentIndex, props.timeOut))
</script>

<template>
  <div class="flex justify-center" aria-label="Steps">
    <ol role="list" class="space-y-6">
      <li v-for="(event, index) in events" :key="event.title">
        <span class="flex items-center justify-start" v-if="index < currentEventIndex">
          <span
            class="flex h-5 w-5 flex-shrink-0 items-center justify-center"
          >
            <CheckCircleIcon
              class="h-full w-full text-accent"
              aria-hidden
            ></CheckCircleIcon>
          </span>
          <span class="ml-3 flex flex-col items-start justify-center">
             <div>{{ event.title }}</div>
             <div>{{ event.body }}</div>
            </span>
        </span>
        <span class="flex items-center justify-start" v-else-if="index == currentEventIndex">
          <span
            class="flex h-5 w-5 flex-shrink-0 items-center justify-center"
            aria-hidden
          >
            <span class="block h-2 w-2 rounded-full bg-primary" />
          </span>
          <span class="ml-3 flex flex-col items-start justify-center">
             <div>{{ event.title }}</div>
             <div>{{ event.body }}</div>
            </span>
        </span>
        <span class="flex items-center justify-start" v-else>
          <span
            class="flex h-5 w-5 flex-shrink-0 items-center justify-center"
          >
            <span class="h-2 w-2 rounded-full bg-accent" />
          </span>
          <span class="ml-3 flex flex-col items-start justify-center">
             <div>{{ event.title }}</div>
             <div>{{ event.body }}</div>
            </span>
        </span>
      </li>
    </ol>
  </div>
</template>
