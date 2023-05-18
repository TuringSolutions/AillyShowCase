<script setup lang="ts">
import {
  UseCases,
  IUseCase,
  AWSUseCase,
  AWSUseCases,
  HelpCases,
  Industries,
} from "@/data/HomeData";
import {
  AtSymbolIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/vue/20/solid";

let currentAWSUseCase = ref<AWSUseCase>(AWSUseCases[0]);
const logoColor = "#91f2e8";
</script>

<template>
  <HeroSection class="h-fullscreen bg-custom-white text-custom-black">
    <div class="flex flex-col">
      <h1 class="pb-2 text-3xl md:text-4xl xl:text-6xl 2xl:pb-4 2xl:text-8xl">
        Big on Data Science & AI
      </h1>
      <div>
        <div
          class="flex flex-col items-center gap-2 xl:flex-row xl:items-baseline xl:justify-start"
        >
          <span class="text-xl xl:text-3xl 2xl:text-4xl">
            Empowering your business needs with
          </span>
          <TypewriterText
            :display-text-array="UseCases.map(x => (x as IUseCase).title)"
            :typing-speed="50"
            :erasing-speed="50"
            :repeat-pause-delay="2000"
            class="bg-accent text-xl text-custom-white xl:text-3xl 2xl:text-4xl py-2"
          />
        </div>
        <!-- <div class="h-16">
          <TransitionGroup
          enter-from-class="opacity-0"
          enter-leave-class="opacity-100"
          enter-active-class="transition-opacity duration-2000"
        >
          <p class="py-4 text-lg xl:text-xl 2xl:text-2xl" v-if="useCaseSubtitle != ''">
            {{ useCaseSubtitle }}
          </p>
        </TransitionGroup>
        </div> -->
        
      </div>
    </div>
    <custom-button
      class="mt-24 p-4 text-xl font-medium xl:p-6 xl:text-2xl 2xl:text-3xl"
    >
      Book a free consultation
    </custom-button>
  </HeroSection>

  <ResponsiveSection class="bg-custom-black text-custom-white">
    <ul
      class="grid grid-flow-row items-center justify-center gap-4 text-center md:grid-cols-2 2xl:grid-cols-4"
    >
      <li v-for="useCase in UseCases" :key="useCase.title">
        <h2 class="text-xl xl:text-2xl 2xl:text-3xl">{{ useCase.title }}</h2>
        <p class="text-lg">{{ useCase.subtitle }}</p>
      </li>
    </ul>
  </ResponsiveSection>

  <ResponsiveSection>
    <h2 class="pb-8 text-center text-2xl 2xl:pb-16 2xl:text-3xl">
      Trusted by Innovative Companies
    </h2>
    <ul>
      <li>
        <img />
        <img />
        <img />
      </li>
    </ul>
  </ResponsiveSection>

  <ResponsiveSection>
    <h2 class="pb-8 text-center text-2xl 2xl:pb-16 2xl:text-3xl">
      How we can help you
    </h2>
    <ul
      class="grid items-center justify-center gap-6 text-center 2xl:grid-cols-2"
    >
      <li
        v-for="helpCase in HelpCases"
        :key="helpCase.caseTitle"
        class="group relative overflow-hidden p-10 outline outline-1"
      >
        <brand-logo
          class="absolute right-0 top-0 h-24 w-24 transition-transform group-hover:scale-125"
          logo-color="#dddddd"
        />
        <h3 class="pb-6 text-lg xl:text-xl 2xl:text-2xl">
          {{ helpCase.caseTitle }}
        </h3>
        <p class="text-md pb-6 xl:text-lg 2xl:text-xl">
          {{ helpCase.caseBody }}
        </p>
        <p>
          <RouterLink :to="helpCase.url" class="text-xl">
            Learn More...
          </RouterLink>
        </p>
      </li>
    </ul>
  </ResponsiveSection>

  <ResponsiveSection>
    <p class="text-md text-center xl:text-lg 2xl:text-xl">
      We welcome opportunities to work alongside different teams on projects of
      any complexity. Working together, we will develop new systems, solutions,
      and products to put you ahead of your competition.
    </p>
    <CustomButton
      class="text-md mx-auto my-6 block p-3 text-center xl:text-lg 2xl:text-xl"
      >Avail Free Consultation</CustomButton
    >
  </ResponsiveSection>

  <ResponsiveSection class="bg-custom-white">
    <p class="text-md pb-6 text-center xl:text-lg 2xl:text-xl">
      Being a leading data science company, we help our clients extract valuable
      business insights from their data to better understand their audience,
      forecast demand, reduce risks, prevent cost overruns, and much more. We
      use different tools and AI services, including AWS:
    </p>

    <!-- For small viewport -->
    <ul class="flex flex-col gap-6 xl:hidden">
      <li v-for="useCase in AWSUseCases" :key="useCase.caseTitle">
        <div class="flex flex-col items-center justify-center">
          <h3 class="text-center text-lg font-medium uppercase">
            {{ useCase.caseTitle }}
          </h3>
          <ul class="flex flex-col">
            <li v-for="subCase in useCase.caseBody" :key="subCase.subtitle">
              <h4 class="inline font-medium">{{ subCase.subtitle }}</h4>
              <span> - </span>
              <span> {{ subCase.description }}</span>
            </li>
          </ul>
        </div>
      </li>
    </ul>

    <!-- For desktop viewport -->
    <div
      class="hidden xl:grid xl:grid-cols-2 xl:items-stretch xl:justify-stretch"
    >
      <ul class="flex flex-col items-end gap-4 p-4">
        <li v-for="useCase in AWSUseCases" :key="useCase.caseTitle">
          <div
            class="flex flex-col items-end justify-end"
            @mouseover="() => (currentAWSUseCase = useCase)"
            @click="() => (currentAWSUseCase = useCase)"
          >
            <p class="text-md text-right xl:text-lg 2xl:text-xl">
              {{ useCase.caseTitle }}
            </p>

            <div
              class="h-0.5 bg-custom-black transition-all ease-in-out group-hover:w-full"
              :class="[
                currentAWSUseCase?.caseTitle == useCase.caseTitle
                  ? 'w-full bg-sky-500'
                  : 'w-8',
              ]"
            ></div>
          </div>
        </li>
      </ul>
      <ul class="flex h-64 flex-col justify-center overflow-scroll p-4">
        <template v-if="currentAWSUseCase !== null">
          <li
            v-for="subCase in currentAWSUseCase?.caseBody"
            :key="subCase.subtitle"
          >
            <h4 class="text-md xl:text-lg 2xl:text-xl">
              {{ subCase.subtitle }}
            </h4>
            <span> - </span>
            <span> {{ subCase.description }}</span>
          </li>
        </template>
      </ul>
    </div>
  </ResponsiveSection>

  <ResponsiveSection>
    <h2 class="pb-8 text-center text-2xl 2xl:pb-16 2xl:text-3xl">
      Our Mission
    </h2>
    <p class="text-md xl:text-lg 2xl:text-xl">
      Our mission is to help our clients rocket their competitiveness and get
      brilliant results of their work unseen before. We strive to reach these
      goals applying innovative and proprietary development technologies,
      providing exceptional services, and using excellent professional
      expertise. Since 2014, our company helps businesses of all sizes all over
      the world to get valuable insights into data, automate repetitive tasks,
      enhance performance, add AI-driven features, and prevent cost overruns.
      For these 7+ years, we have built a sustainable business based on trust,
      latest innovation, state-of-the-art technologies, and experience.
    </p>
  </ResponsiveSection>

  <ResponsiveSection>
    <h2 class="pb-8 text-center text-2xl 2xl:pb-16 2xl:text-3xl">Industries we are transforming</h2>
    <p class="text-md xl:text-lg 2xl:text-xl text-center">
      Take a look at examples of our work and learn how our clients from
      different industries have benefited from our data science consulting
      services.
    </p>

    <ul class="flex flex-col gap-6 max-w-7xl mx-auto py-6">
      <li v-for="industry in Industries" :key="industry.title" class="flex flex-row items-center gap-6">
        <div>
          <component :is="industry.icon" class="w-8 h-8"/>
        </div>
        <div>
          <h3 class="text-md xl:text-lg 2xl:text-xl font-medium">{{ industry.title }}</h3>
          <p class="text-md xl:text-lg">{{ industry.body }}</p>
        </div>
      </li>
    </ul>

    <ul class="md:grid md:grid-cols-2 max-w-7xl mx-auto md:gap-x-16 md:gap-y-6 py-6">
      <li v-for="industry in Industries" :key="industry.title">
        <component :is="industry.icon" class="w-12 h-12 mx-auto px-2"/>
        <h3 class="text-center text-md xl:text-lg 2xl:text-xl font-medium">{{ industry.title }}</h3>
        <p class="text-justify text-md xl:text-lg 2xl:text-xl">{{ industry.body }}</p>
      </li>
      <li class="col-span-2">
        <component is="plus-circle" class="w-12 h-12 mx-auto px-2" />
        <h3 class="text-center text-md xl:text-lg 2xl:text-xl font-medium">Not on this list?</h3>
        <p class="text-md xl:text-lg 2xl:text-xl xl:text-center">
          We are always expanding our reach to newer industries, and honestly,
          this list cannot keep up. Contact us for a free consultation to know
          if we can help with a project from your industry.
        </p>
      </li>
    </ul>
  </ResponsiveSection>

  <ResponsiveSection>
    <h2 class="pb-8 text-center text-2xl 2xl:pb-16 2xl:text-3xl">
      Get Started with Data Science Today
    </h2>
    <form class="mx-auto grid max-w-7xl grid-cols-12 gap-6">
      <div class="col-span-12 flex xl:col-span-5 xl:col-start-1">
        <div
          class="flex aspect-square items-center justify-center bg-custom-black"
        >
          <user-icon class="h-8 w-8 text-custom-white" aria-hidden />
        </div>
        <label for="sendername" class="sr-only">Name</label>
        <input
          id="sendername"
          type="text"
          placeholder="Name"
          class="text-md w-full xl:text-lg 2xl:text-xl"
        />
      </div>
      <div class="col-span-12 flex xl:col-span-7 xl:col-start-6">
        <div
          class="flex aspect-square items-center justify-center bg-custom-black"
        >
          <building-office-icon class="h-8 w-8 text-custom-white" aria-hidden />
        </div>
        <label for="companyname" class="sr-only">Company Name</label>
        <input
          id="companyname"
          type="text"
          placeholder="Company Name"
          class="text-md w-full xl:text-lg 2xl:text-xl"
        />
      </div>
      <div class="col-span-12 flex xl:col-span-7 xl:col-start-1">
        <div
          class="flex aspect-square items-center justify-center bg-custom-black"
        >
          <at-symbol-icon class="h-8 w-8 text-custom-white" aria-hidden />
        </div>
        <label for="senderemail" class="sr-only">Email ID</label>
        <input
          id="senderemail"
          type="email"
          placeholder="Email ID"
          class="text-md w-full xl:text-lg 2xl:text-xl"
        />
      </div>
      <div class="col-span-12 flex xl:col-span-5 xl:col-start-8">
        <div
          class="flex aspect-square items-center justify-center bg-custom-black"
        >
          <phone-icon class="h-8 w-8 text-custom-white" aria-hidden />
        </div>
        <label for="senderphone" class="sr-only">Phone Number</label>
        <input
          id="senderphone"
          type="tel"
          placeholder="Phone Number"
          class="text-md w-full xl:text-lg 2xl:text-xl"
        />
      </div>
      <div class="col-span-12 col-start-1">
        <label for="messagebody" class="sr-only">Message</label>
        <textarea
          id="messagebody"
          placeholder="Message"
          class="text-md h-36 w-full xl:text-lg 2xl:text-xl"
        />
      </div>
      <div class="col-span-12 col-start-1">
        <custom-button class="w-full p-2 text-lg">Submit</custom-button>
      </div>
    </form>
  </ResponsiveSection>
</template>

<style scoped></style>
