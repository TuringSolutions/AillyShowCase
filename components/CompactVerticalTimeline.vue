<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/20/solid";

defineProps<{ events: Array<string> }>();

let currentIndex = ref<number>(0);
</script>

<template>
  <div class="flex justify-center" aria-label="Steps">
    <ol role="list" class="space-y-6">
      <li v-for="(event, index) in events" :key="event">
        <span class="flex items-start" v-if="index < currentIndex">
          <span
            class="relative flex h-5 w-5 flex-shrink-0 items-center justify-center"
          >
            <CheckCircleIcon
              class="h-full w-full"
              aria-hidden
            ></CheckCircleIcon>
          </span>
          <span class="ml-3"> {{ event }}</span>
        </span>
        <span class="flex items-start" v-else-if="index == currentIndex">
          <span
            class="relative flex h-5 w-5 flex-shrink-0 items-center justify-center"
            aria-hidden
          >
            <span class="absolute h-4 w-4 rounded-full" />
            <span class="relative block h-2 w-2 rounded-full" />
          </span>
          <span class="ml-3">{{ event }}</span>
        </span>
        <span class="flex items-start" v-else>
          <span
            class="relative flex h-5 w-5 flex-shrink-0 items-center justify-center"
          >
            <span class="h-2 w-2 rounded-full" />
          </span>
          <span class="ml-3"> {{ event }}</span>
        </span>
      </li>
    </ol>
  </div>
</template>
