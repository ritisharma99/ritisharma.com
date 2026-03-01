<template>
  <div>
    <PageHeader title="3D Printing Projects" subtitle="From digital models to physical objects" />

    <div class="max-w-5xl mx-auto px-6 pb-20">
      <div class="grid sm:grid-cols-2 gap-6">
        <NuxtLink to="/creative/printing/rx8" class="glass-card overflow-hidden group block">
          <div class="aspect-video bg-dark-600/50 flex items-center justify-center">
            <NuxtImg
              src="/images/creative/rx8/wallpaper.jpg"
              alt="Mazda RX-8 Scale Model"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              width="600"
              height="338"
              format="webp"
              loading="lazy"
            />
          </div>
          <div class="p-6">
            <h3 class="text-lg font-bold text-white group-hover:text-brand-teal transition-colors">
              Mazda RX-8 Scale Model
            </h3>
            <p class="text-slate-400 text-sm mt-2">A detailed scale model designed in Fusion 360 and 3D printed.</p>
          </div>
        </NuxtLink>

        <NuxtLink to="/creative/printing/chess" class="glass-card overflow-hidden group block">
          <div class="aspect-video bg-dark-600/50 flex items-center justify-center">
            <NuxtImg
              src="/images/creative/chess/IMG_4098.JPG"
              alt="Harry Potter Chess Set"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              width="600"
              height="338"
              format="webp"
              loading="lazy"
            />
          </div>
          <div class="p-6">
            <h3 class="text-lg font-bold text-white group-hover:text-brand-teal transition-colors">
              Harry Potter Chess Set
            </h3>
            <p class="text-slate-400 text-sm mt-2">A custom-designed chess set inspired by the Wizarding World.</p>
          </div>
        </NuxtLink>
      </div>

      <NuxtLink to="/creative" class="back-link">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
        Back to Creative
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: '3D Printing — Riti Sharma',
  ogTitle: '3D Printing — Riti Sharma',
  description: '3D printing projects — Mazda RX-8 scale model and Harry Potter chess set designed and printed.',
  ogDescription: '3D printing projects by Riti Sharma — scale models and custom designs.',
  ogImage: '/images/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>
