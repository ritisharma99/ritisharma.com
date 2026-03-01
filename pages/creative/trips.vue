<template>
  <div>
    <PageHeader title="Trips & Exploration" subtitle="Adventures on the open road" />

    <div class="max-w-4xl mx-auto px-6 pb-20">
      <div class="space-y-6 text-slate-300 text-lg leading-relaxed">
        <p>
          There's something about a road trip that resets the mind. Whether it's winding through
          mountain passes, stopping at diners in small towns, or watching the landscape shift from
          forests to deserts — every trip is a reminder that the world is bigger than our day-to-day.
        </p>
        <p>
          I love the simple act of pointing the car in a direction and seeing where it leads. Some of
          my best ideas have come from staring out the window at changing terrain.
        </p>
      </div>

      <div class="mt-12">
        <h2 class="text-2xl font-bold text-white mb-6">Why I Travel</h2>
        <div class="grid sm:grid-cols-3 gap-6">
          <div class="glass-card p-6 text-center">
            <span class="text-3xl block mb-3">🗺️</span>
            <h3 class="font-bold text-white mb-2">Discovery</h3>
            <p class="text-slate-400 text-sm">Finding new places, new perspectives, and new ways to see the familiar.</p>
          </div>
          <div class="glass-card p-6 text-center">
            <span class="text-3xl block mb-3">🤝</span>
            <h3 class="font-bold text-white mb-2">Connection</h3>
            <p class="text-slate-400 text-sm">Meeting people, hearing their stories, sharing meals and moments.</p>
          </div>
          <div class="glass-card p-6 text-center">
            <span class="text-3xl block mb-3">🧘</span>
            <h3 class="font-bold text-white mb-2">Reflection</h3>
            <p class="text-slate-400 text-sm">There's nothing like distance from routine for clarity of thought.</p>
          </div>
        </div>
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
  title: 'Trips & Exploration — Riti Sharma',
  ogTitle: 'Trips & Exploration — Riti Sharma',
  description: 'Road trips and adventures — discovery, connection, and reflection through travel.',
  ogDescription: 'Road trips and travel adventures by Riti Sharma.',
  ogImage: '/images/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>
