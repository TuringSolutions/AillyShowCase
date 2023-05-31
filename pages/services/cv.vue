<script setup lang="ts">
import { expertises, benefits, useCases, FAQs } from "@/data/services/CVData";

useSeoMeta({
  title: "👁 Computer Vision | Ailly Solutions"
})
</script>

<template>
  <hero-section class="h-twothirdscreen">
    <h1 class="pb-2 text-4xl xl:text-5xl 2xl:pb-4 2xl:text-6xl">Computer Vision Solutions</h1>
        <p class="text-xl xl:text-3xl max-w-5xl">
          Add value to your business with our ML algorithms for reliable
          computer vision solutions with image analysis, object detection and
          video analysis
        </p>
  </hero-section>

  <responsive-section>
    <p class="text-md xl:text-lg 2xl:text-xl">
      Our team of experts at InData Labs helps businesses in Healthcare,
      Manufacturing, Fitness and Sports, E-commerce, Marketing and Logistics,
      and other industries solve business challenges and fuel growth with the
      help of computer vision technology. No matter what solution you need - a
      surveillance video system, building a visual inspection system, invoice
      processing app, or pose estimation implementation for enhancing your
      customer experience and automating business processes, we'll find the
      right way to address it.
    </p>
  </responsive-section>

  <responsive-section>
    <h2 class="text-center text-2xl pb-8 2xl:pb-16 2xl:text-3xl">Computer Vision Expertise</h2>
    <p class="text-md xl:text-lg 2xl:text-xl text-center">
      Our computer vision software development team builds custom solutions for
      varied use cases
    </p>
    <ul class="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-px drop-shadow md:bg-primary max-w-7xl mx-auto">
      <li v-for="expertise in expertises" :key="expertise.title" class="flex flex-col items-center justify-center bg-custom-white p-6">
        <component :is="expertise.svg" v-if="expertise.svg != ''" class="w-16 h-16 mx-auto text-flair"></component>
        <h3 class="text-lg xl:text-xl 2xl:text-2xl text-center">
          {{ expertise.title }}
        </h3>
        <p class="text-md xl:text-lg 2xl:text-xl text-justify">
          {{ expertise.body }}
        </p>
      </li>
    </ul>
  </responsive-section>

  <responsive-section>
    <h2 class="text-center text-2xl pb-8 2xl:pb-16 2xl:text-3xl">Benefits</h2>
    <ul class="hidden xl:grid xl:grid-cols-12 max-w-7xl mx-auto gap-12 ">
      <li class="contents" v-for="benefit in benefits" :key="benefit.title">
        <div class="col-span-4">
          <h3 class="text-lg xl:text-xl 2xl:text-2xl text-right uppercase">
          {{ benefit.title }}
        </h3>
        <div class="h-0.5 w-full bg-primary ml-auto"></div>
        </div>
        
        <div class="col-span-8">
        <p class="text-md xl:text-lg 2xl:text-xl">
          {{ benefit.body }}
        </p>
        <h4 class="text-md xl:text-lg 2xl:text-xl font-medium text-center">Key Benefits:</h4>
        <ul class="flex flex-col items-center">
          <li v-for="subBenefit in benefit.subBenefits" :key="subBenefit" class="text-md xl:text-lg 2xl:text-xl list-disc list-inside">
            {{ subBenefit }}
          </li>
        </ul>
      </div>
      </li>
    </ul>

    <ul class="flex flex-col gap-6 max-w-7xl mx-auto xl:hidden">
      <li v-for="benefit in benefits" :key="benefit.title">
        <h3 class="text-lg xl:text-xl 2xl:text-2xl text-center uppercase">
          {{ benefit.title }}
        </h3>
        <p class="text-md xl:text-lg 2xl:text-xl">
          {{ benefit.body }}
        </p>
        <h4 class="text-md xl:text-lg 2xl:text-xl font-medium text-center">Key Benefits:</h4>
        <ul class="flex flex-col items-center">
          <li v-for="subBenefit in benefit.subBenefits" :key="subBenefit" class="text-md xl:text-lg 2xl:text-xl list-disc list-inside">
            {{ subBenefit }}
          </li>
        </ul>
      </li>
    </ul>
  </responsive-section>

  <responsive-section>
    <h2 class="text-center text-2xl pb-8 2xl:pb-16 2xl:text-3xl">Use Cases</h2>
    <ul class="flex flex-col gap-6 xl:grid xl:gap-px xl:bg-primary drop-shadow xl:grid-cols-2 max-w-7xl mx-auto">
      <li
        v-for="useCase in useCases"
        :key="useCase.title"
        class="flex flex-col p-6 bg-custom-white"
      >
        
          <h3 class="text-lg xl:text-xl uppercase font-medium text-center">
            {{ useCase.title }}
          </h3>
          <p class="text-md xl:text-lg 2xl:text-xl list-disc" v-html="useCase.htmlBody" />
      </li>
    </ul>
  </responsive-section>

  <responsive-section>
    <faq-section :faqs="FAQs"/>
  </responsive-section>
</template>
