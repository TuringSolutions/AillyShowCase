<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/20/solid";

let showFullMenu = ref<boolean>(false);
</script>

<template>
  <FullNav v-if="showFullMenu" @close-menu="() => showFullMenu = false"/>
    
  <div v-else class="relative flex min-h-screen flex-col items-stretch justify-start">
    <NavTop  class="hidden md:block absolute top-0 right-0 z-20 bg-custom-black text-custom-white p-6 opacity-80" />
    <Bars3Icon class="m-6 block md:hidden absolute top-0 right-0 w-6 h-6" @click="() => showFullMenu = true"></Bars3Icon>
    <slot />

    <ResponsiveSection>
      <footer>
        <FooterSection />
      </footer>
    </ResponsiveSection>
  </div>
</template>
