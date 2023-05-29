<template>
  <div class="relative">
    <responsive-section>
      <div
        class="flex h-full flex-col items-center justify-center text-center xl:items-start xl:text-left"
      >
        <slot></slot>
      </div>
    </responsive-section>
    <div class="absolute inset-0 -z-10">
      <slot name="background-slot" />
    </div>
  </div>
</template>
