<template>
  <div
    class="grid grid-flow-row justify-center text-center sm:grid-cols-2 sm:text-left xl:grid-cols-4"
  >
    <div class="flex flex-col">
      <div class="font-bold uppercase underline">Expertise and Services</div>
      <router-link to=""><div class="footer-link">Data Science & AI</div></router-link>
      <router-link to=""><div>Machine Learning</div></router-link>
      <router-link to="/services/softwaredev"
        ><div>AI Software Development</div></router-link
      >
      <router-link to=""><div>AI Mobile Apps Development</div></router-link>
      <router-link to=""><div>Natural Language Processing</div></router-link>
      <router-link to=""><div>Data Capture & OCR</div></router-link>
    </div>
    <div class="flex flex-col">
      <router-link to="">
        <div class="font-bold uppercase underline">
          Big Data Solutions
        </div></router-link
      >
      <router-link to=""><div>Big Data Development</div></router-link>
      <router-link to=""><div>Data Architecture Engineering</div></router-link>
      <router-link to=""><div>Data Warehouse Engineering</div></router-link>
      <router-link to=""><div>BI & Data Visualizations</div></router-link>
      <router-link to=""><div>Predictive Analysis</div></router-link>
      <router-link to=""><div>Cloud Services</div></router-link>
    </div>
    <div class="flex flex-col">
      <div class="font-bold uppercase underline">About Us</div>
      <router-link to=""><div>Success Stories</div></router-link>
      <router-link to=""><div>Blog</div></router-link>
      <router-link to=""><div>Write to Us</div></router-link>
      <router-link to=""><div>About</div></router-link>
      <router-link to=""><div>Careers</div></router-link>
    </div>
    <div class="flex flex-col xl:items-end">
      <div class="flex flex-row"></div>
      <div class="xl:text-right">Address goes here</div>
      <div class="xl:text-right">Contact Email and Phone number</div>
    </div>
  </div>
</template>
