<script setup lang="ts">
defineProps<{noDefaultStyle?: boolean}>()
</script>

<template>
    <section :class="$attrs.class" class="h-full">
        <div
        :class="[ noDefaultStyle ? '' : 'px-12 py-6 2xl:py-12 2xl:px-4 2xl:w-11/12 2xl:mx-auto max-w-[1920px]' ]"
        class="h-full"
        >
            <slot></slot>
        </div>
    </section>
</template>

