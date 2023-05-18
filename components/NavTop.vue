<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/20/solid";
import { NavItems, isNavItemValid, hasValidChildren } from "~/data/NavData";
</script>

<template>
  <nav>
    <ol class="flex flex-row gap-4">
      <li v-for="item in NavItems">
        <Popover class="relative" v-slot="{ open }">
          <PopoverButton>
            <NuxtLink class="inline-flex flex-row" :to="item.url">
              <span>{{ item.id }}</span>
              <chevron-down-icon
                class="h-6 w-6 transition-transform ease-in-out"
                v-if="hasValidChildren(item)"
                :class="{ 'rotate-180': open }"
              />
            </NuxtLink>
          </PopoverButton>
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
          >
            <PopoverPanel
              v-slot="{ close }"
              v-if="hasValidChildren(item)"
              class="absolute right-0 z-10 min-w-max bg-black text-white"
            >
              <ul class="flex flex-col items-stretch justify-stretch">
                <li
                  v-for="(child, index) in item.children"
                  :key="child.id"
                  class="w-full p-3 hover:bg-slate-500"
                >
                  <NuxtLink
                    :to="child.url"
                    class="inline-flex flex-row items-center justify-start"
                    @click="() => close()"
                  >
                    <span>{{ child.id }}</span>
                  </NuxtLink>
                </li>
              </ul>
            </PopoverPanel>
          </Transition>
        </Popover>
      </li>
    </ol>
  </nav>
</template>
