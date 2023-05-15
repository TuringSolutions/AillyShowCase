<script setup lang="ts">
import {
  NavItems,
  isNavItemValid,
  hasValidChildren,
} from "~/data/NavData";
</script>

<template>
    <nav class="absolute inset-0 bg-pink-400">
      <ul class="flex flex-col items-center justify-center text-center h-full">
        <li v-for="item in NavItems" :key="item.id">
          {{ item.id }}
        </li>
      </ul>
    </nav>
</template>