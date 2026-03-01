<template>
  <div>
    <PageHeader title="Poster: PCMD 2023" subtitle="Resolving Deformations of Mineralized Collagen Fibrils in 3D" />

    <div class="max-w-5xl mx-auto px-6 pb-20">
      <div class="mb-4">
        <span class="inline-block text-xs font-semibold text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full">🏆 Poster Award</span>
      </div>

      <div class="glass-card overflow-hidden">
        <NuxtImg
          src="/images/posters/Poster_PCMD_2023.png"
          alt="PCMD 2023 Poster — Resolving Deformations of Mineralized Collagen Fibrils in 3D"
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
  title: 'PCMD 2023 Poster — Riti Sharma',
  ogTitle: 'Resolving Deformations of Mineralized Collagen Fibrils in 3D — PCMD 2023',
  description: 'PCMD 2023 poster presentation (Poster Award winner): Resolving deformations of mineralized collagen fibrils in 3D.',
  ogDescription: 'Award-winning PCMD 2023 poster on mineralized collagen fibrils.',
  ogImage: '/images/posters/Poster_PCMD_2023.png',
  twitterCard: 'summary_large_image',
})
</script>
