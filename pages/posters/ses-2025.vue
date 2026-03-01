<template>
  <div>
    <PageHeader title="Poster: SES 2025" subtitle="Bone Resists Fatigue through Crack Deceleration at the Fibril Scale" />

    <div class="max-w-5xl mx-auto px-6 pb-20">
      <div class="glass-card overflow-hidden">
        <NuxtImg
          src="/images/posters/Poster_SES_2025.png"
          alt="SES 2025 Poster — Bone Resists Fatigue through Crack Deceleration at the Fibril Scale"
          class="w-full"
          width="1600"
          height="1200"
          format="webp"
        />
      </div>

      <NuxtLink to="/work?tab=research" class="back-link">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
        Back to Research
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })

useSeoMeta({
  title: 'SES 2025 Poster — Riti Sharma',
  ogTitle: 'Bone Resists Fatigue through Crack Deceleration at the Fibril Scale',
  description: 'SES 2025 poster presentation: Bone resists fatigue through crack deceleration at the fibril scale. Riti Sharma, University of Pennsylvania.',
  ogDescription: 'SES 2025 poster on bone fatigue resistance at the fibril scale.',
  ogImage: '/images/posters/Poster_SES_2025.png',
  twitterCard: 'summary_large_image',
})
</script>
