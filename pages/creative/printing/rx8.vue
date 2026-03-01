<template>
  <div>
    <PageHeader title="Mazda RX-8 Scale Model" subtitle="Designed in Fusion 360, brought to life with 3D printing" />

    <div class="max-w-4xl mx-auto px-6 pb-20">
      <div class="glass-card overflow-hidden mb-8">
        <NuxtImg
          src="/images/creative/rx8/wallpaper.jpg"
          alt="Mazda RX-8 3D printed scale model"
          class="w-full object-cover"
          width="1200"
          height="675"
          format="webp"
        />
      </div>

      <div class="text-slate-300 text-lg leading-relaxed space-y-4">
        <p>
          The Mazda RX-8 holds a special place as a car that blended rotary engineering innovation with
          sports car aesthetics. This project was about capturing that spirit in miniature.
        </p>
      </div>

      <NuxtLink to="/creative/printing" class="back-link">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
        Back to 3D Printing
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Mazda RX-8 Scale Model — Riti Sharma',
  ogTitle: 'Mazda RX-8 Scale Model — Riti Sharma',
  description: 'A detailed Mazda RX-8 scale model designed in Fusion 360 and 3D printed.',
  ogDescription: '3D printed Mazda RX-8 scale model.',
  ogImage: '/images/creative/rx8/wallpaper.jpg',
  twitterCard: 'summary_large_image',
})
</script>
