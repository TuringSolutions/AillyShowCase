<script setup lang="ts">
defineProps<{
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}>();
</script>

<template>
  <h2 class="pb-6 text-center text-2xl 2xl:text-3xl">
    Frequently Asked Questions
  </h2>
  <p class="text-md hidden text-center xl:block xl:text-lg 2xl:text-xl">
    Can't find your question here? Reach out to
    <span>
      <nuxt-link to="/support">our support team!</nuxt-link>
    </span>
  </p>
  <div>
    <ul>
      <li v-for="qa in faqs" :key="qa.question" class="list-inside list-disc">
        <span class="text-md xl:text-lg 2xl:text-xl">
          {{ qa.question }}
        </span>
        <p v-html="qa.answer" class="text-md xl:text-lg 2xl:text-xl"></p>
      </li>
    </ul>
  </div>
  <p class="text-md text-center xl:hidden pt-6 xl:text-lg 2xl:text-xl">
    Can't find your question here? Reach out to
    <span>
      <nuxt-link to="/support">our support team!</nuxt-link>
    </span>
  </p>
</template>
