<template>
  <div>
    <PageHeader title="Harry Potter Chess Set" subtitle="A custom chess set inspired by the Wizarding World" />

    <div class="max-w-4xl mx-auto px-6 pb-20">
      <div class="glass-card overflow-hidden mb-8">
        <NuxtImg
          src="/images/creative/chess/IMG_4098.JPG"
          alt="Harry Potter Chess Set 3D printed"
          class="w-full object-cover"
          width="1200"
          height="675"
          format="webp"
        />
      </div>

      <div class="grid sm:grid-cols-2 gap-4 mb-8">
        <div class="glass-card overflow-hidden">
          <NuxtImg
            src="/images/creative/chess/IMG_3986.png"
            alt="Chess set detail"
            class="w-full object-cover"
            width="600"
            height="400"
            format="webp"
            loading="lazy"
          />
        </div>
        <div class="glass-card overflow-hidden">
          <NuxtImg
            src="/images/creative/chess/FB8794AB-0D0E-4071-8EFD-D7C93E609347.jpg"
            alt="Chess set pieces"
            class="w-full object-cover"
            width="600"
            height="400"
            format="webp"
            loading="lazy"
          />
        </div>
      </div>

      <div class="text-slate-300 text-lg leading-relaxed space-y-4">
        <p>
          A custom-designed chess set bringing the Harry Potter universe to the chessboard, designed
          and printed piece by piece.
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
  title: 'Harry Potter Chess Set — Riti Sharma',
  ogTitle: 'Harry Potter Chess Set — Riti Sharma',
  description: 'A custom 3D printed Harry Potter chess set, designed and printed piece by piece.',
  ogDescription: '3D printed Harry Potter themed chess set.',
  ogImage: '/images/creative/chess/IMG_4098.JPG',
  twitterCard: 'summary_large_image',
})
</script>
