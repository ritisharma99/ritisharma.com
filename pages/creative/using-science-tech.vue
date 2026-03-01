<template>
  <div>
    <PageHeader title="Using Science & Tech" subtitle="Applying scientific thinking to everyday life" />

    <div class="max-w-4xl mx-auto px-6 pb-20">
      <p class="text-slate-300 text-lg leading-relaxed mb-12">
        Scientific thinking isn't just for the lab. The same principles that guide research —
        observation, hypothesis, experimentation, iteration — can transform how you approach
        everyday problems. I'm fascinated by the bridge between theory and practice.
      </p>

      <h2 class="text-2xl font-bold text-white mb-8">The Bridge Between Theory and Practice</h2>
      <div class="grid sm:grid-cols-2 gap-6">
        <div class="glass-card p-6">
          <h3 class="font-bold text-white mb-2">🔍 Problem-Solving Mentality</h3>
          <p class="text-sm text-slate-400">Approaching life's challenges with the same rigor as a research problem — define, decompose, test, iterate.</p>
        </div>
        <div class="glass-card p-6">
          <h3 class="font-bold text-white mb-2">📊 Data-Driven Thinking</h3>
          <p class="text-sm text-slate-400">Making decisions based on evidence rather than assumptions. It applies to everything from finances to fitness.</p>
        </div>
        <div class="glass-card p-6">
          <h3 class="font-bold text-white mb-2">📖 Continuous Learning</h3>
          <p class="text-sm text-slate-400">Treating every new skill as an experiment. What's the fastest path to competence? How do you measure progress?</p>
        </div>
        <div class="glass-card p-6">
          <h3 class="font-bold text-white mb-2">🔗 Systems Thinking</h3>
          <p class="text-sm text-slate-400">Understanding that everything is connected. Small changes in one area cascade through entire systems.</p>
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
  title: 'Using Science & Tech — Riti Sharma',
  ogTitle: 'Using Science & Tech — Riti Sharma',
  description: 'Applying scientific thinking to everyday life — problem-solving, data-driven thinking, continuous learning, and systems thinking.',
  ogDescription: 'Bridging theory and practice — applying science to everyday life.',
  ogImage: '/images/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>
