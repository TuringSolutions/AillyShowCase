<script setup lang="ts">
defineProps<{noDefaultPadding?: boolean}>()
</script>

<template>
    <section :class="$attrs.class" class="h-full">
        <div
        :class="[ noDefaultPadding ? '' : 'px-12 py-6 2xl:py-12 2xl:px-4',  '2xl:w-11/12 2xl:mx-auto max-w-[1366px]' ]"
        class="h-full"
        >
            <slot></slot>
        </div>
    </section>
</template>

