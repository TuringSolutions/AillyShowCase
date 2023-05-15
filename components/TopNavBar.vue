<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/20/solid";
import {
  NavItems,
  isNavItemValid,
  hasValidChildren,
} from "~/data/NavData";
</script>

<template>
  <div>
    <div class="relative">
      <nav class="absolute right-0 top-0 z-10 flex flex-row gap-2">
        <popover
          v-for="menuItem in NavItems"
          v-slot="{ open }"
          class="relative"
        >
          <template v-if="isNavItemValid(menuItem)">
            <popover-button
              :class="open ? '' : 'text-opacity-80'"
              class="group inline-flex flex-row items-end gap-2"
            >
              <span>{{ menuItem.id }}</span>
              <chevron-down-icon
                v-if="hasValidChildren(menuItem)"
                :class="open ? '' : 'text-opacity-70'"
                class="h-6 w-6 transition duration-100 ease-in-out"
              />
            </popover-button>
            <popover-panel
              v-if="menuItem.children?.filter((x) => x.url != '')?.length"
              class="absolute right-0 z-10 min-w-max"
            >
              <ul class="flex flex-col items-start justify-start">
                <li v-for="child in menuItem.children" :key="child.id">
                  <router-link
                    :to="child.url"
                    class="flex flex-row items-center justify-start"
                  >
                    <img v-if="child.logo != ''" :src="child.logo" />
                    <div>
                      {{ child.id }}
                    </div>
                  </router-link>
                </li>
              </ul>
            </popover-panel>
          </template>
        </popover>
        <popover v-slot="{}"> </popover>
      </nav>
    </div>
  </div>
</template>
