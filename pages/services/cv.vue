<script setup lang="ts">
import { expertises, benefits, useCases, FAQs } from "@/data/services/CVData";
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
    <ul class="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 gap-6 py-12 max-w-7xl mx-auto">
      <li v-for="expertise in expertises" :key="expertise.title">
        <component :is="expertise.svg" v-if="expertise.svg != ''" class="w-16 h-16 mx-auto text-primary"></component>
        <h3 class="text-lg xl:text-xl 2xl:text-2xl text-center">
          {{ expertise.title }}
        </h3>
        <p class="text-md xl:text-lg 2xl:text-xl">
          {{ expertise.body }}
        </p>
      </li>
    </ul>
  </responsive-section>

  <responsive-section>
    <h2 class="text-center text-2xl pb-8 2xl:pb-16 2xl:text-3xl">Benefits</h2>
    <ul class="grid">
      <li v-for="benefit in benefits" :key="benefit.title">
        <h3 class="text-lg xl:text-xl 2xl:text-2xl text-center">
          {{ benefit.title }}
        </h3>
        <p class="text-md xl:text-lg 2xl:text-xl">
          {{ benefit.body }}
        </p>
        <h4>Key Benefits:</h4>
        <ul>
          <li v-for="subBenefit in benefit.subBenefits" :key="subBenefit">
            {{ subBenefit }}
          </li>
        </ul>
      </li>
    </ul>
  </responsive-section>

  <responsive-section>
    <ul class="flex flex-col gap-6">
      <li
        v-for="useCase in useCases"
        :key="useCase.title"
        class="flex flex-row"
      >
        <div></div>
        <div>
          <h3 class="text-lg xl:text-xl 2xl:text-2xl text-center">
            {{ useCase.title }}
          </h3>
          <p class="text-md xl:text-lg 2xl:text-xl">
            {{ useCase.body }}
          </p>
        </div>
      </li>
    </ul>
  </responsive-section>

  <responsive-section>
    <faq-section :faqs="FAQs"/>
  </responsive-section>
</template>
