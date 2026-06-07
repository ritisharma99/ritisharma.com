<template>
  <div>
    <PageHeader title="Trips & Exploration" subtitle="Every trip carries its own kind of magic" />

    <div class="max-w-4xl mx-auto px-6 pb-20">
      <div class="glass-card overflow-hidden mb-8">
        <NuxtImg
          src="/images/creative/trips/cover.jpg"
          alt="Road trip through a natural rock tunnel"
          class="w-full h-[280px] md:h-[360px] object-cover"
          width="1400"
          height="900"
          format="webp"
        />
      </div>

      <div class="space-y-6 text-slate-700 text-lg leading-relaxed">
        <p>
          I love to travel. Whether it is Switzerland, Europe more broadly, Iceland, Ireland, New Zealand,
          or the US, every trip feels special in its own way. Some places stay with me because of the scenery,
          some because of the people, and some because of the feeling of complete freedom that comes with being on the move.
        </p>
        <p>
          Travel gives me perspective. It reminds me how much there is to see, how many ways there are to live,
          and how memorable even a simple stop on the road can become when you are sharing it with the right people.
        </p>
        <p>
          I especially love the in-between moments, roadside stops, long drives, unexpected detours,
          and little snapshots that end up holding the whole memory of a place.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 gap-6 mt-10">
        <div class="glass-card overflow-hidden">
          <NuxtImg
            src="/images/creative/trips/roadside-lineup.jpg"
            alt="Cars lined up during a road trip stop"
            class="w-full h-[260px] object-cover"
            width="1400"
            height="900"
            format="webp"
            loading="lazy"
          />
        </div>
        <div class="glass-card overflow-hidden">
          <NuxtImg
            src="/images/creative/trips/road-trip-stop.jpg"
            alt="A travel stop with cars parked together during a trip"
            class="w-full h-[260px] object-cover"
            width="2048"
            height="1024"
            format="webp"
            loading="lazy"
          />
        </div>
      </div>

      <NuxtLink to="/creative" class="back-link">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
        Back to Beyond the Lab
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Trips & Exploration | Riti Sharma',
  ogTitle: 'Trips & Exploration | Riti Sharma',
  description: 'A love of travel across Switzerland, Europe, Iceland, Ireland, New Zealand, and the US, with every trip carrying its own story.',
  ogDescription: 'Travel memories from across Europe, Iceland, Ireland, New Zealand, and the US.',
  ogImage: '/images/creative/trips/cover.jpg',
  twitterCard: 'summary_large_image',
})
</script>
