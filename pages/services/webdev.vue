<script setup lang="ts">
import { Features, AIFeatures, SiteTypes } from "@/data/services/WebDev";
</script>

<template>
  <HeroSection class="h-twothirdscreen">
    <h1 class="pb-2 text-4xl xl:text-5xl 2xl:pb-4 2xl:text-6xl">
      Web Development
    </h1>
    <p class="max-w-5xl text-xl xl:text-3xl">
      Bespoke websites and web applications to match your vision
    </p>
  </HeroSection>

  <ResponsiveSection>
    <p class="text-md xl:text-lg 2xl:text-xl">
      We design, develop and deliver websites and applications customized for
      enterprise, startups and personal needs. With the right strategy, design,
      and storytelling, we have worked on impactful websites for lifestyle
      brands to tech, startups to venture capitalists, professional services to
      personal passion projects.
    </p>
  </ResponsiveSection>

  <ResponsiveSection>
    <h2 class="pb-8 text-center text-2xl 2xl:pb-16 2xl:text-3xl">
      Accelerate your brand with us
    </h2>
    <ul class="mx-auto grid max-w-7xl grid-flow-row gap-12 xl:grid-cols-3">
      <li v-for="feature in Features" :key="feature.title">
        <div
          class="contents xl:flex xl:flex-row xl:items-baseline xl:justify-start xl:gap-4"
        >
          <h3
            class="flex-shrink-0 pb-2 text-center text-lg font-medium xl:text-xl 2xl:text-2xl"
          >
            {{ feature.title }}
          </h3>
          <div class="hidden h-0.5 w-full bg-custom-black xl:block" />
        </div>
        <p class="text-md text-justify xl:text-lg 2xl:text-xl">
          {{ feature.body }}
        </p>
      </li>
    </ul>
  </ResponsiveSection>

  <ResponsiveSection>
    <h2 class="pb-8 text-center text-2xl 2xl:pb-16 2xl:text-3xl">
      Give your website the AI edge
    </h2>
    <p class="text-md text-center xl:text-lg 2xl:text-xl">
      Enhance and supercharge your website with the AI features.
    </p>
    <ul
      class="mx-auto flex max-w-7xl flex-col gap-6 drop-shadow md:grid md:grid-cols-2 md:items-stretch md:gap-px md:bg-primary xl:grid-cols-4"
    >
      <li
        v-for="feature in AIFeatures"
        :key="feature.body"
        class="flex flex-col items-center justify-center bg-custom-white p-6 md:justify-start"
      >
        <h3 class="text-md md:text-lg xl:text-xl">{{ feature.title }}</h3>
        <p class="pt-6 text-center">{{ feature.body }}</p>
      </li>
    </ul>
  </ResponsiveSection>

  
  <ResponsiveSection>
    <h2 class="pb-8 text-center text-2xl 2xl:pb-16 2xl:text-3xl">
      We have something for everyone
    </h2>
    <p class="text-md text-center xl:text-lg 2xl:text-xl">
      We design all kinds of website, be it a passion project for yourself, a portfolio, or an enterprise web application.
    </p>
      <ul
      class="mx-auto flex max-w-7xl flex-col gap-6 drop-shadow md:grid md:grid-cols-2 md:items-stretch md:gap-px md:bg-primary xl:grid-cols-4"
    >
      <li
        v-for="siteType in SiteTypes"
        :key="siteType.title"
        class="flex flex-col items-center justify-center bg-custom-white p-6 md:justify-start"
      >
        <h3 class="text-md md:text-lg xl:text-xl">{{ siteType.title }}</h3>
        <p class="pt-6 text-center">{{ siteType.body }}</p>
      </li>
    </ul>
  </ResponsiveSection>
</template>
