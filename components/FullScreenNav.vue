<script setup lang="ts">
import { XCircleIcon, ChevronDownIcon } from "@heroicons/vue/20/solid";
import { NavItems, isNavItemValid, hasValidChildren } from "~/data/NavData";

const emits = defineEmits<{ (e: "closeMenu"): void }>();
</script>

<template>
  <div
    class="absolute inset-0 flex h-full flex-col items-center justify-center"
  >
    <component is="brand-logo" class="h-16 my-6" />
    <nav>
      <ul class="flex flex-col items-center justify-center gap-6 text-center">
        <li v-for="item in NavItems" :key="item.id">
          <NuxtLink
            :to="item.url"
            @click="() => $emit('closeMenu')"
            class="flex flex-row items-center justify-center"
          >
            <span class="text-lg font-medium"> {{ item.id }} </span>
          </NuxtLink>
        </li>
        <li>
          <XCircleIcon
            class="h-10 w-10"
            @click="() => $emit('closeMenu')"
          ></XCircleIcon>
        </li>
      </ul>
    </nav>
  </div>
</template>
