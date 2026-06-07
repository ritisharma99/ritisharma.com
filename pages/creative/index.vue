<template>
  <div>
    <div class="page-header pt-32 pb-12 text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Projects</h1>
      <p class="text-lg text-slate-500 max-w-xl mx-auto">
        A few things that live outside the lab, made with the same curiosity.
      </p>
    </div>

    <div class="max-w-5xl mx-auto px-6 pb-24">
      <div class="grid sm:grid-cols-3 gap-8">
        <NuxtLink
          v-for="project in projects"
          :key="project.to"
          :to="project.to"
          class="glass-card group overflow-hidden block"
        >
          <div class="h-52 bg-slate-100 dark:bg-slate-900/80 flex items-center justify-center relative overflow-hidden">
            <NuxtImg
              :src="project.cover"
              :alt="project.title"
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              width="800"
              height="520"
              format="webp"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/15 to-transparent" />
          </div>
          <div class="p-7">
            <h3 class="font-bold text-slate-900 text-lg mb-2 group-hover:text-brand-teal transition-colors">{{ project.title }}</h3>
            <p class="text-slate-500 text-sm leading-relaxed">{{ project.desc }}</p>
            <span class="inline-flex items-center gap-1 text-brand-teal text-sm font-medium mt-5">
              Explore
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Projects | Riti Sharma',
  ogTitle: 'Projects | Riti Sharma',
  description: '3D printing, learning to ride, and road trips. Projects outside the research lab by Riti Sharma, PhD candidate at UPenn.',
  ogDescription: '3D printing, learning to ride, and road trips. Projects outside the lab.',
  ogImage: '/images/og-image.png',
  twitterCard: 'summary_large_image',
})

const projects = [
  {
    title: '3D Printing',
    desc: 'A Mazda RX-8 scale model and a Harry Potter chess set, designed in Fusion 360 and printed from scratch.',
    cover: '/images/creative/printing/cover.jpg',
    to: '/creative/printing',
  },
  {
    title: 'Freedom on Two Wheels',
    desc: 'Learning to master how to ride a motorcycle in New Zealand, from a licence and GN125 to later graduating to an R3.',
    cover: '/images/creative/motorbike/cover.jpeg',
    to: '/creative/motorbike',
  },
  {
    title: 'Road Trips',
    desc: 'Mountain highways and empty roads across New Zealand, India, and the US East Coast.',
    cover: '/images/creative/trips/cover.jpg',
    to: '/creative/trips',
  },
]
</script>
