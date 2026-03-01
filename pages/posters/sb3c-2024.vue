<template>
  <div>
    <PageHeader title="Poster: SB3C 2024" subtitle="Resolving Deformations of Mineralized Collagen Fibrils in 3D" />

    <div class="max-w-5xl mx-auto px-6 pb-20">
      <div class="glass-card overflow-hidden">
        <NuxtImg
          src="/images/posters/Poster_Sb3C_2024.png"
          alt="SB3C 2024 Poster — Resolving Deformations of Mineralized Collagen Fibrils in 3D"
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
  title: 'SB3C 2024 Poster — Riti Sharma',
  ogTitle: 'Resolving Deformations of Mineralized Collagen Fibrils in 3D',
  description: 'SB3C 2024 poster presentation: Resolving deformations of mineralized collagen fibrils in 3D. Riti Sharma, University of Pennsylvania.',
  ogDescription: 'SB3C 2024 poster on deformations of mineralized collagen fibrils.',
  ogImage: '/images/posters/Poster_Sb3C_2024.png',
  twitterCard: 'summary_large_image',
})
</script>
