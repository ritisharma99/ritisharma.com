<template>
  <div>
    <PageHeader title="Beyond the Lab" subtitle="Be curious, be creative, be you" />

    <div class="max-w-5xl mx-auto px-6 pb-20">
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NuxtLink
          v-for="item in creativeItems"
          :key="item.to"
          :to="item.to"
          class="glass-card p-8 text-center group block"
        >
          <span class="text-4xl block mb-4">{{ item.emoji }}</span>
          <h3 class="text-lg font-bold text-white group-hover:text-brand-teal transition-colors">
            {{ item.title }}
          </h3>
          <p class="text-slate-400 text-sm mt-2">{{ item.desc }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Creative — Riti Sharma',
  ogTitle: 'Creative — Riti Sharma',
  description: 'Beyond the lab — road trips, 3D printing, blogging, motorbikes, learning new tools, and applying science to everyday life.',
  ogDescription: 'Exploring creativity beyond research — 3D printing, road trips, motorbikes, and more.',
  ogImage: '/images/og-image.png',
  twitterCard: 'summary_large_image',
})

const creativeItems = [
  { emoji: '🚗', title: 'Trips & Exploration', desc: 'Road trips and adventures across landscapes', to: '/creative/trips' },
  { emoji: '🖨️', title: '3D Printing', desc: 'From CAD models to physical creations', to: '/creative/printing' },
  { emoji: '💭', title: 'Blog', desc: 'Thoughts on science, storytelling, and life', to: '/creative/blog' },
  { emoji: '🏍️', title: 'Learning to Ride', desc: 'The journey of learning to ride a motorbike', to: '/creative/motorbike' },
  { emoji: '🔧', title: 'Learning New Tools', desc: 'Picking up new skills and software', to: '/creative/learning-tools' },
  { emoji: '🌟', title: 'Using Science & Tech', desc: 'Applying scientific thinking to everyday life', to: '/creative/using-science-tech' },
]
</script>
