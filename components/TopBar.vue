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
          <component
            is="brand-nameplate"
            class="hidden h-16 py-2 text-custom-black md:block"
          />
          <component
            is="brand-logo"
            class="h-16 py-2 text-custom-black md:hidden"
          />
        </div>

        <nav class="text-custom-black md:hidden">
          <bars-3-icon
            class="h-12 py-2"
            @click="() => $emit('hamburgerIconClick')"
          />
        </nav>

        <nav class="hidden items-stretch text-custom-black md:flex">
          <ul
            class="flex h-full flex-row items-center justify-between gap-3 xl:gap-6"
          >
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
                <transition
                  enter-active-class="transition duration-100 ease-out"
                  enter-from-class="translate-y-1 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition ease-in duration-100"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-1 opacity-0"
                >
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
                        <NuxtLink
                          :to="childNav.url"
                          @click="() => close()"
                          class="block p-2"
                        >
                          <span>{{ childNav.id }}</span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </popover-panel>
                </transition>
              </popover>
              <button v-else>
                <nuxt-link class="hover:text-accent" :to="navItem.url">
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
