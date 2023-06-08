import { VueReCaptcha, useReCaptcha } from "vue-recaptcha-v3";

export const useRecaptcha = (publicKey: string) => {
  const { vueApp } = useNuxtApp();
  const config = useRuntimeConfig();
  vueApp.use(VueReCaptcha, {
    siteKey: publicKey,
    loaderOptions: { autoHideBadge: true },
  });
};
