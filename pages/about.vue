<script setup lang="ts">
import { WhyChooseUs } from "@/data/AboutData";
import { UserCircleIcon } from "@heroicons/vue/20/solid";
</script>

<template>
  <HeroSection class="h-twothirdscreen">
    <h1 class="pb-2 text-4xl xl:text-5xl 2xl:pb-4 2xl:text-6xl">About Us</h1>
    <p class="max-w-5xl text-xl xl:text-3xl">
      We are a leading data science firm and AI-powered solutions provider with
      our own R&D center
    </p>
  </HeroSection>

  <ResponsiveSection>
    <h2 class="pb-8 text-center text-2xl 2xl:pb-16 2xl:text-3xl">
      Established in 2014
    </h2>
    <div class="flex flex-col items-center justify-center gap-4 xl:flex-row">
      <p class="text-md text-center xl:text-lg 2xl:text-xl">
        Our firm was founded in 20xx by John Doe, who brought years of
        experience in big data analytics to a new venture to make it a success.
      </p>
      <div class="flex flex-col items-center">
        <UserCircleIcon class="h-10 w-10"></UserCircleIcon>
        <strong>John Doe</strong>
      </div>
    </div>
  </ResponsiveSection>

  <ResponsiveSection>
    <ul class="grid grid-cols-1 text-center md:grid-cols-2 xl:grid-cols-4">
      <li class="flex flex-col items-center gap-2 px-6 py-10 outline outline-1">
        <h3 class="text-xl font-medium">Employees</h3>
        <h2 class="text-center text-2xl 2xl:text-3xl">80</h2>
        <h4 class="text-md font-medium xl:text-lg">We are</h4>
        <p class="text-md pb-6 text-center xl:text-lg 2xl:text-xl">
          Data Scientists, Engineers, Architects, Analysts, Designers
        </p>
        <p>Learn More ></p>
      </li>
      <li class="flex flex-col items-center gap-2 px-6 py-10 outline outline-1">
        <h3 class="text-xl font-medium">Projects Delivered</h3>
        <h2 class="text-center text-2xl 2xl:text-3xl">150</h2>
        <h4 class="text-md font-medium xl:text-lg">Clients Geography</h4>
        <p class="text-md pb-6 text-center xl:text-lg 2xl:text-xl">
          USA, UK, EU, Japan
        </p>
        <p>Learn More ></p>
      </li>
      <li class="flex flex-col items-center gap-2 px-6 py-10 outline outline-1">
        <h3 class="text-xl font-medium">Key Industries</h3>
        <h2 class="text-center text-2xl 2xl:text-3xl">5+</h2>
        <h4 class="text-md font-medium xl:text-lg">Industry Focus</h4>
        <p class="text-md pb-6 text-center xl:text-lg 2xl:text-xl">
          Marketing & Advertising, E-commerce, Supply Chain & Logistics Fintech,
          Digital Health IoT
        </p>
      </li>
      <li class="flex flex-col items-center gap-2 px-6 py-10 outline outline-1">
        <h3 class="text-xl font-medium">Locations</h3>
        <h2 class="text-center text-2xl 2xl:text-3xl">3</h2>
        <h4 class="text-md font-medium xl:text-lg">Our Offices</h4>
        <p class="text-md text-center xl:text-lg 2xl:text-xl">
          Across the world
        </p>
        <p>Contact Us ></p>
      </li>
    </ul>
  </ResponsiveSection>

  <ResponsiveSection>
    <div class="flex flex-col-reverse md:flex-row items-center">
      <div>
        <h2 class="p-4 md:pb-8 text-center text-2xl 2xl:pb-16 2xl:text-3xl">
          We are a certified AWS Partner
        </h2>
        <p class="text-md xl:text-lg 2xl:text-xl">
          As a certified cloud development partner, we build and seamlessly
          scale our clients' cloud service solutions within a diverse AWS
          ecosystem. We help solve data and analytics challenges using a broad
          portfolio of purpose-built analytics services, scalable data lakes,
          and warehouses.
        </p>
        <p>Learn More...</p>
      </div>
      <img src="@/components/global/Aws.svg" class="w-80"
      />
    </div>
  </ResponsiveSection>

  <ResponsiveSection>
    <h2 class="pb-8 text-center text-2xl 2xl:pb-16 2xl:text-3xl">
      Why Clients Choose Us
    </h2>
    <ul class="grid grid-cols-1 xl:grid-cols-3 gap-5 max-w-7xl mx-auto">
      <li v-for="(reason, index) in WhyChooseUs" :key="reason.title"
      :class="[index == 0 ? 'xl:col-start-1':
       index == 1? 'xl:col-start-3':
       index == 2? 'xl:col-start-2':
       index == 3? 'xl:col-start-1':
       index == 4 ? 'xl:col-start-3' : '']"  
      class="flex flex-col">
        <h3 class="text-center text-md xl:text-lg 2xl:text-xl font-medium" >{{ reason.title }}</h3>
        <div class="h-0.5 bg-primary"></div>
        <p class="text-justify text-md xl:text-lg 2xl:text-xl">{{ reason.description }}</p>
      </li>
    </ul>
  </ResponsiveSection>
</template>
