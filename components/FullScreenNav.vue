<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { XCircleIcon, ChevronDownIcon } from "@heroicons/vue/20/solid";
import { NavItems, isNavItemValid, hasValidChildren } from "~/data/NavData";

const emits = defineEmits<{ (e: "closeMenu"): void }>();
</script>

<template>
  <div class="flex h-full flex-col items-center justify-center text-custom-black">
    <nuxt-link to="/" @click="() => $emit('closeMenu')">
    <component is="brand-logo" class="mb-12 h-16" />
    </nuxt-link>
    <nav>
      <ul class="flex flex-col items-center justify-center gap-6 text-center font-semibold">
        <li v-for="item in NavItems" :key="item.id">
          <popover v-slot="{ open }" v-if="hasValidChildren(item)">
            <popover-button class="inline-flex flex-row hover:text-accent">
              <span>{{ item.id }}</span>
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
              <popover-panel v-slot="{ close }" class="mt-4">
                <ul class="flex flex-col items-center">
                  <li
                    v-for="childNav in item.children"
                    :key="childNav.id"
                  >
                    <NuxtLink
                      :to="childNav.url"
                      @click="() => $emit('closeMenu')"
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
            <nuxt-link class="hover:text-accent" :to="item.url" @click="() => $emit('closeMenu')">
              <span>{{ item.id }}</span>
            </nuxt-link>
          </button>

          
        </li>
        <li>
          <XCircleIcon
            class="h-10 w-10 mt-8 cursor-pointer"
            @click="() => $emit('closeMenu')"
          ></XCircleIcon>
        </li>
      </ul>
    </nav>
  </div>
</template>
