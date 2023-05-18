<template>
  <div
    class="grid grid-flow-row justify-center text-center sm:grid-cols-2 sm:text-left xl:grid-cols-4"
  >
    <div class="flex flex-col">
      <div class="font-bold uppercase underline">Expertise and Services</div>
      <nuxt-link to=""><div class="footer-link">Data Science & AI</div></nuxt-link>
      <nuxt-link to=""><div>Machine Learning</div></nuxt-link>
      <nuxt-link to="/services/softwaredev"
        ><div>AI Software Development</div></nuxt-link
      >
      <nuxt-link to=""><div>AI Mobile Apps Development</div></nuxt-link>
      <nuxt-link to=""><div>Natural Language Processing</div></nuxt-link>
      <nuxt-link to=""><div>Data Capture & OCR</div></nuxt-link>
    </div>
    <div class="flex flex-col">
      <nuxt-link to="">
        <div class="font-bold uppercase underline">
          Big Data Solutions
        </div></nuxt-link
      >
      <nuxt-link to=""><div>Big Data Development</div></nuxt-link>
      <nuxt-link to=""><div>Data Architecture Engineering</div></nuxt-link>
      <nuxt-link to=""><div>Data Warehouse Engineering</div></nuxt-link>
      <nuxt-link to=""><div>BI & Data Visualizations</div></nuxt-link>
      <nuxt-link to=""><div>Predictive Analysis</div></nuxt-link>
      <nuxt-link to=""><div>Cloud Services</div></nuxt-link>
    </div>
    <div class="flex flex-col">
      <div class="font-bold uppercase underline">About Us</div>
      <nuxt-link to=""><div>Success Stories</div></nuxt-link>
      <nuxt-link to=""><div>Blog</div></nuxt-link>
      <nuxt-link to=""><div>Write to Us</div></nuxt-link>
      <nuxt-link to=""><div>About</div></nuxt-link>
      <nuxt-link to=""><div>Careers</div></nuxt-link>
    </div>
    <div class="flex flex-col xl:items-end">
      <div class="flex flex-row"></div>
      <div class="xl:text-right">Address goes here</div>
      <div class="xl:text-right">Contact Email and Phone number</div>
    </div>
  </div>
</template>
