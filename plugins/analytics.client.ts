export default defineNuxtPlugin(() => {
  const { gaId } = useRuntimeConfig().public

  if (!gaId) return

  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
        async: true,
      },
      {
        children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`,
      },
    ],
  })
})
