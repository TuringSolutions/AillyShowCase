<script setup lang="ts">
import { XCircleIcon } from "@heroicons/vue/20/solid";
import {
  NavItems,
  isNavItemValid,
  hasValidChildren,
} from "~/data/NavData";

const emits = defineEmits<{(e: "closeMenu"): void}>()

</script>

<template>
    <nav class="absolute inset-0">
      <ul class="flex flex-col items-center justify-around text-center h-full">
        <li v-for="item in NavItems" :key="item.id">
          <NuxtLink :to="item.url" @click="() => $emit('closeMenu')">
          {{ item.id }}
          </NuxtLink>
        </li>
        <li>
          <XCircleIcon class="w-10 h-10" @click="() => $emit('closeMenu')"></XCircleIcon>
        </li>
      </ul>
    </nav>
</template>