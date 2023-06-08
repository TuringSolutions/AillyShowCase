<script setup lang="ts">
import {
  AtSymbolIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/vue/20/solid";

useSeoMeta({
  title: "📩 Contact Us | Ailly Solutions"
})


</script>

<template>
  <HeroSection class="h-twothirdscreen">
    <h1 class="pb-2 text-4xl xl:text-5xl 2xl:pb-4 2xl:text-6xl">Contact Us</h1>
    <p class="max-w-5xl text-xl xl:text-3xl">
      Get in touch with our experts and support team
    </p>
  </HeroSection>

  <ResponsiveSection>
    <h2 class="pb-6 text-center text-2xl 2xl:text-3xl">
      New here? Want a free consultation with our experts?
    </h2>
    <p class="pb-12 text-center mx-auto text-md xl:text-lg 2xl:text-xl">
        Fill up the following form outlining your queries and we will get back to you shortly.
    </p>
    <form class="mx-auto grid max-w-7xl grid-cols-12 gap-6" name="contact" method="POST" data-netlify="true">
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
        <custom-button class="w-full p-2 text-lg" type="submit">Submit</custom-button>
      </div>
    </form>
  </ResponsiveSection>

  <ResponsiveSection>
    <h2 class="pb-6 text-center text-2xl 2xl:text-3xl">
      Have you worked with us before? Or do you have an ongoing project with us?
    </h2>
    <p class="pb-12 text-center mx-auto text-md xl:text-lg 2xl:text-xl">
        Get in touch with our support team.
    </p>
    <form class="mx-auto grid max-w-7xl grid-cols-12 gap-6">
      <div class="col-span-12 flex xl:col-span-5 xl:col-start-1">
        <div
          class="flex aspect-square items-center justify-center bg-custom-black"
        >
          <user-icon class="h-8 w-8 text-custom-white" aria-hidden />
        </div>
        <label for="username" class="sr-only">User Name</label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          class="text-md w-full xl:text-lg 2xl:text-xl"
        />
      </div>
      <div class="col-span-12 flex xl:col-span-7 xl:col-start-6">
        <div
          class="flex aspect-square items-center justify-center bg-custom-black"
        >
          <building-office-icon class="h-8 w-8 text-custom-white" aria-hidden />
        </div>
        <label for="projectid" class="sr-only">Ongoing Project ID(if you have any)</label>
        <input
          id="projectid"
          type="text"
          placeholder="Ongoing Project ID (if any)"
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

  <ResponsiveSection>
    <div class="text-center mx-auto text-md xl:text-xl">
        For emergency support, please reach out to us via Microsoft Teams.
    </div>
  </ResponsiveSection>
</template>
