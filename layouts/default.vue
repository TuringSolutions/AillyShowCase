<script setup lang="ts">
import { Bars3Icon } from "@heroicons/vue/20/solid";

let showFullMenu = ref<boolean>(false);
</script>

<template>
  <FullNav v-if="showFullMenu" />
    
  <div v-else class="relative flex min-h-screen flex-col items-stretch justify-start">
    

   

    <slot />

    <ResponsiveSection>
      <footer>
        <FooterSection />
      </footer>
    </ResponsiveSection>
  </div>
</template>
