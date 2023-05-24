<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/20/solid";

let showFullMenu = ref<boolean>(false);
</script>

<template>
  <full-screen-nav v-if="showFullMenu" @close-menu="() => (showFullMenu = false)" />

  <div
    v-show="!showFullMenu"
    class="relative flex min-h-screen flex-col items-stretch justify-start"
  >
    <top-bar
      class="fixed left-0 right-0 top-0 z-10 bg-custom-white shadow drop-shadow-lg"
      @hamburgerIconClick="() => (showFullMenu = true)"
    />
    <slot />

    <ResponsiveSection>
      <footer>
        <FooterSection />
      </footer>
    </ResponsiveSection>
  </div>
</template>
