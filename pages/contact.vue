<script setup lang="ts">
import {
  AtSymbolIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/vue/20/solid";

</script>

<template>
  <HeroSection class="h-twothirdscreen">
    <h1 class="pb-2 text-4xl xl:text-5xl 2xl:pb-4 2xl:text-6xl">Contact Us</h1>
    <p class="max-w-5xl text-xl xl:text-3xl">
      
    </p>
  </HeroSection>
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
