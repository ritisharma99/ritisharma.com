<template>
  <div>
    <PageHeader title="Learning How to Ride a Motorbike" subtitle="Two wheels, endless lessons" />

    <div class="max-w-4xl mx-auto px-6 pb-20">
      <div class="text-slate-300 text-lg leading-relaxed space-y-6 mb-12">
        <p>
          Learning to ride a motorbike as an adult is an exercise in humility. Your brain knows what
          to do, but your body hasn't caught up yet. Every lesson is a reminder that skills are built
          through repetition, not understanding alone.
        </p>
        <p>
          There's a lot more physics involved than people realize — countersteering, gyroscopic effects,
          and the delicate balance between throttle and lean. As an engineer, I find it endlessly
          fascinating. As a learner, it's equal parts terrifying and thrilling.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-white mb-6">What I'm Learning</h2>
      <div class="grid sm:grid-cols-3 gap-6">
        <div class="glass-card p-6 text-center">
          <span class="text-3xl block mb-3">⚙️</span>
          <h3 class="font-bold text-white mb-2">Technical</h3>
          <p class="text-slate-400 text-sm">The mechanics and physics of motorcycle control.</p>
        </div>
        <div class="glass-card p-6 text-center">
          <span class="text-3xl block mb-3">🧠</span>
          <h3 class="font-bold text-white mb-2">Mental</h3>
          <p class="text-slate-400 text-sm">Focus, presence, and managing the fear factor.</p>
        </div>
        <div class="glass-card p-6 text-center">
          <span class="text-3xl block mb-3">💪</span>
          <h3 class="font-bold text-white mb-2">Physical</h3>
          <p class="text-slate-400 text-sm">Building muscle memory and riding instincts.</p>
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
  title: 'Learning to Ride a Motorbike — Riti Sharma',
  ogTitle: 'Learning to Ride a Motorbike — Riti Sharma',
  description: 'The journey of learning to ride a motorbike as an adult — technical, mental, and physical lessons.',
  ogDescription: 'Learning to ride a motorbike — technical, mental, and physical lessons.',
  ogImage: '/images/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>
