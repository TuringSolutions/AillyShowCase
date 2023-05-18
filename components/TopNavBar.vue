<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/20/solid";
import { NavItems, isNavItemValid, hasValidChildren } from "~/data/NavData";
</script>

<template>
  <div>
  <nav class="relative flex flex-row gap-2">
    <popover v-for="menuItem in NavItems" v-slot="{ open }" class="relative">
      <template v-if="isNavItemValid(menuItem)">
        <popover-button
          :class="open ? 'text-opacity-100' : 'text-red-400'"
          class="group inline-flex flex-row items-end gap-2"
        >
          <span>{{ menuItem.id }}</span>
          <chevron-down-icon
            v-if="hasValidChildren(menuItem)"
            :class="{ 'rotate-180 transform': open }"
            class="h-6 w-6 transition duration-100 ease-in-out"
          />
        </popover-button>
        <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
        <popover-panel
          v-if="menuItem.children?.filter((x) => x.url != '')?.length"
          class="absolute right-0 z-10 min-w-max outline-1 outline p-4 mt-2"
        >
          <ul class="flex flex-col items-start justify-start">
            <li v-for="child in menuItem.children" :key="child.id">
              <nuxt-link
                :to="child.url"
                class="flex flex-row items-center justify-start"
              >
                <img v-if="child.logo != ''" :src="child.logo" />
                <div>
                  {{ child.id }}
                </div>
              </nuxt-link>
            </li>
          </ul>
        </popover-panel>
        </transition>
      </template>
    </popover>
    <popover v-slot="{}"> </popover>
  </nav>
</div>
</template>
