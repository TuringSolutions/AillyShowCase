<script setup lang="ts">
import {
  expertises,
  timelineEvents,
  industries,
  developmentProcess,
  FAQs,
} from "@/data/services/SoftwareDev";
import { ChevronRightIcon } from "@heroicons/vue/20/solid";

let currentDevelopmentProcess = ref<{
  index: number;
  title: string;
  tasks: Array<string>;
  icon: any;
}>( developmentProcess[0]);

useSeoMeta({
  title:"🧠 AI Software Development | Ailly Solutions"
})
</script>

<template>
  <hero-section class="h-twothirdscreen">
    <h1 class="pb-2 text-4xl xl:text-5xl 2xl:pb-4 2xl:text-6xl">
      AI Software Development
    </h1>
    <p class="max-w-5xl text-xl xl:text-3xl">
      Custom Built AI Software to transform your business
    </p>
  </hero-section>

  <responsive-section>
    <p class="text-md xl:text-lg 2xl:text-xl">
      We deliver relevant and effective AI software, data science and Big data
      solutions that are uniquely tailored to your business requirements. We are
      here to help you innovate with minimal risk while maximizing better
      results.
    </p>
  </responsive-section>

  <responsive-section>
    <h2 class="pb-8 text-center text-2xl 2xl:pb-16 2xl:text-3xl">
      Our Expertise
    </h2>
    <p class="text-md xl:text-lg 2xl:text-xl">
      As an AI development agency, we always keep track of bleeding-edge
      technologies, and have developed our in-house proprietary models and tools
      to deliver benefits to our clients with ease.
    </p>
  </responsive-section>

  <responsive-section>
    <ul class="mx-auto grid max-w-7xl grid-flow-row gap-12 xl:grid-cols-3">
      <li v-for="expertise in expertises" :key="expertise.title">
        <div class="contents xl:flex xl:flex-row xl:items-baseline xl:justify-start xl:gap-4">
          <h3
            class="pb-2 text-center text-lg font-medium xl:text-xl 2xl:text-2xl flex-shrink-0"
          >
            {{ expertise.title }}
          </h3>
          <div class="hidden xl:block h-0.5 w-full bg-custom-black"/>
        </div>
        <p class="text-md text-justify xl:text-lg 2xl:text-xl">
          {{ expertise.body }}
        </p>
      </li>
    </ul>
  </responsive-section>

  <responsive-section>
    <div class="flex flex-row md:contents">
      <ul class="flex flex-col gap-2 md:flex-row items-stretch justify-between md:items-center md:justify-between max-w-7xl md:mx-auto">
      <li v-for="process in developmentProcess" :key="process.title">
        <div class="flex flex-row w-full md:contents items-center justify-between">
          <div class="group flex flex-col items-start md:items-center" @mouseover="() => (currentDevelopmentProcess = process)" @click="() => (currentDevelopmentProcess = process)">
          <component :is="process.icon" class="h-6 w-6 md:h-8 md:w-8" :class="[currentDevelopmentProcess?.index == process.index ? 'text-accent' : 'text-flair']" />
          <h3 class="text-md md:text-lg xl:text-xl">{{ process.title }}</h3>
          <div class="hidden md:block mb-1.5 h-1 w-full rounded-full" :class="[currentDevelopmentProcess?.index == process.index? 'bg-accent' : 'bg-transparent']"></div>
        </div>
          <ChevronRightIcon class="md:hidden w-5"  :class="[currentDevelopmentProcess?.index ==  process.index ? 'text-flair' : 'text-transparent']"/>
        </div>
        
      </li>
    </ul>
    <ul class="max-w-7xl md:mx-auto md:h-48 p-2 md:pt-6 border-l-2 border-accent md:border-none w-full md:w-auto">
      <li
        v-for="task in currentDevelopmentProcess?.tasks"
        :key="task"
        class="list-inside list-disc text-md xl:text-lg 2xl:text-xl"
      >
        {{ task }}
      </li>
    </ul>
  </div>
  </responsive-section>

  <responsive-section>
    <div class="flex flex-row items-center justify-center max-w-7xl">
      <expanded-vertical-timeline class="hidden md:block"  :steps="timelineEvents" />
      <compact-vertical-timeline  class="md:hidden" :events="timelineEvents" :time-out="3000"/>
    </div>
  </responsive-section>

  <responsive-section>
    <h2 class="pb-8 text-center text-2xl 2xl:pb-16 2xl:text-3xl">Industries</h2>
    <p class="text-md pb-12 text-center xl:text-lg 2xl:text-xl">
      We have proven track records of helping businesses in different niches to
      reach a new level. And we keep on enhancing our expertise across domains
      with AI algorithms.
    </p>
    <ul class="mx-auto grid max-w-7xl grid-flow-row gap-12 xl:grid-cols-3">
      <li
        v-for="industry in industries"
        :key="industry.title"
        class="flex flex-col justify-start gap-4"
      >
        <component
          v-if="industry.icon"
          :is="industry.icon"
          class="mx-auto h-12 w-12 text-flair"
        />
        <div>
          <h3
            class="pb-2 text-center text-lg font-medium xl:text-xl 2xl:text-2xl"
          >
            {{ industry.title }}
          </h3>
          <p class="text-md text-justify xl:text-lg 2xl:text-xl">
            {{ industry.body }}
          </p>
        </div>
      </li>
    </ul>
  </responsive-section>

  <responsive-section>
    <faq-section :faqs="FAQs"></faq-section>
  </responsive-section>
</template>
