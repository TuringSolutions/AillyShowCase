<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon, Bars3Icon } from "@heroicons/vue/20/solid";
import { NavItems, isNavItemValid, hasValidChildren } from "~/data/NavData";

const emits = defineEmits<{ (e: "hamburgerIconClick"): void }>();
</script>

<template>
  <div>
    <ResponsiveSection no-default-padding class="px-12 xl:px-4">
    <div class="flex flex-row items-center justify-between">
      <div class="flex flex-row">
        <component is="brand-nameplate" class="hidden md:block h-16 text-custom-black py-2" />
        <component is="brand-logo" class="md:hidden h-16 text-custom-black py-2" />
      </div>

      <nav class="text-custom-black md:hidden">
        <bars-3-icon class="h-12 py-2" @click="() => $emit('hamburgerIconClick')"/>
    </nav>

      <nav class="text-custom-black hidden md:flex items-stretch">
        <ul class="flex flex-row items-center justify-between  xl:gap-6 gap-3 h-full">
          <li v-for="navItem in NavItems">
            <popover
              v-if="hasValidChildren(navItem)"
              class="relative"
              v-slot="{ open }"
            >
              <popover-button class="inline-flex flex-row hover:text-accent">
                <span>{{ navItem.id }}</span>
                <chevron-down-icon
                  class="h-6 w-6 transition-transform ease-in-out"
                  :class="{ 'rotate-180': open }"
                />
              </popover-button>
              <transition>
                <popover-panel
                  v-slot="{ close }"
                  class="absolute right-0 mt-5 w-60 min-w-max bg-slate-300"
                >
                  <ul class="flex flex-col items-stretch">
                    <li
                      v-for="childNav in navItem.children"
                      :key="childNav.id"
                      class="hover:bg-primary"
                    >
                      <NuxtLink :to="childNav.url" @click="() => close()" class="block p-2">
                        <span>{{ childNav.id }}</span>
                      </NuxtLink>
                    </li>
                  </ul>
                </popover-panel>
              </transition>
            </popover>
            <button v-else>
              <nuxt-link class="hover:text-accent">
                {{ navItem.id }}
              </nuxt-link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
</ResponsiveSection>
  </div>
</template>
