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
        <NuxtLink to="/" class="flex flex-row">
          <component
            is="brand-nameplate"
            class="hidden h-16 py-2 text-custom-black md:block"
          />
          <component
            is="brand-logo"
            class="h-16 py-2 text-custom-black md:hidden"
          />
        </NuxtLink>

        <nav class="text-custom-black lg:hidden">
          <bars-3-icon
            class="h-12 py-2"
            @click="() => $emit('hamburgerIconClick')"
          />
        </nav>

        <nav class="hidden text-custom-black lg:flex">
          <ul class="flex flex-row items-center justify-between gap-6 xl:gap-8">
            <li v-for="navItem in NavItems">
              <popover
                v-if="hasValidChildren(navItem)"
                class="relative"
                v-slot="{ open }"
              >
                <popover-button
                  class="inline-flex flex-row items-center gap-1 hover:text-accent"
                >
                  <span class="inline-flex flex-row">
                    <span>{{ navItem.id }}</span>
                    <chevron-down-icon
                      class="h-6 w-6 transition-transform ease-in-out"
                      :class="{ 'rotate-180': open }"
                    />
                  </span>
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
                    class="absolute right-0 mt-4 w-60 min-w-max bg-slate-50 shadow-lg outline outline-2 outline-slate-200 drop-shadow"
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
                          class="flex flex-row items-center gap-3 p-3"
                        >
                          <component
                            :is="childNav.logo"
                            class="h-6 w-6 text-flair"
                          />
                          <span>{{ childNav.id }}</span>
                        </NuxtLink>
                      </li>
                    </ul>
                  </popover-panel>
                </transition>
              </popover>
              <button v-else>
                <nuxt-link
                  class="inline-flex flex-row items-center gap-1 hover:text-accent"
                  :to="navItem.url"
                >
                  <span>
                    {{ navItem.id }}
                  </span>
                </nuxt-link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </ResponsiveSection>
  </div>
</template>
