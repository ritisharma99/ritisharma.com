<template>
  <div>
    <PageHeader title="Mazda RX-8 Scale Model" subtitle="Turning my own car into a tiny resin-printed version" />

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

      <div class="text-slate-700 text-lg leading-relaxed space-y-4">
        <p>
          I have an RX-8 and absolutely love it, so making a miniature version of my own car felt like a
          project I had to do. I started with a photo of it that I really liked, then used Meshy AI to help
          turn that image into something I could extrude into a printable model.
        </p>
        <p>
          Once I had the geometry where I wanted it, I printed it on an Anycubic resin printer. Seeing the
          little model come out as an actual tiny toy car was one of those deeply satisfying maker moments,
          where something personal suddenly becomes physical.
        </p>
        <p>
          The best part was parking the small one right in front of the real car. That side-by-side moment
          was priceless. It made the whole process feel less like a print job and more like creating a small
          tribute to a car I genuinely enjoy owning.
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
  title: 'Mazda RX-8 Scale Model | Riti Sharma',
  ogTitle: 'Mazda RX-8 Scale Model | Riti Sharma',
  description: 'A miniature version of my Mazda RX-8, built from a favorite photo using Meshy AI and printed on an Anycubic resin printer.',
  ogDescription: 'A personal Mazda RX-8 miniature made from a favorite photo and resin printed as a tiny model car.',
  ogImage: '/images/creative/rx8/wallpaper.jpg',
  twitterCard: 'summary_large_image',
})
</script>
