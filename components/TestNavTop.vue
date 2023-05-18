<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/20/solid";
import { NavItems, isNavItemValid, hasValidChildren } from "~/data/NavData";
</script>

<template>
  <div>
    <nav class="flex flex-row gap-2">
      <popover class="relative" v-for="navItem in NavItems" v-slot="{open}">
        <popover-button
          :class="open ? 'text-opacity-10' : 'text-opacity-80'"
          class="group inline-flex flex-row items-end gap-2"
        >
          <span>{{ navItem.id }}</span>
          <chevron-down-icon
            v-if="hasValidChildren(navItem)"
            :class="{ open: 'rotate-180' }"
            class="h-6 w-6 transition-transform ease-in-out"
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
            v-if="navItem.children?.filter((x) => x.url != '')?.length"
            class="absolute right-0 z-10 min-w-max"
          >
            <ul class="flex flex-col items-start justify-start">
              <li
                v-for="child in navItem.children?.filter((x) => x.url != '')"
                :key="child.id"
              >
                <nuxt-link
                  :to="child.url"
                  class="inline-flex flex-row items-center justify-start"
                >
                  <div>{{ child.id }}</div>
                </nuxt-link>
              </li>
            </ul>
          </popover-panel>
        </transition>
      </popover>
    </nav>
  </div>
</template>
