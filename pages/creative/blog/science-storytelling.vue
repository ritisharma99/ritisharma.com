<template>
  <div>
    <PageHeader title="Science Storytelling" subtitle="Making complex science accessible and engaging" />

    <div class="max-w-4xl mx-auto px-6 pb-20">
      <div class="text-slate-300 text-lg leading-relaxed space-y-6 mb-12">
        <p>
          Science doesn't have to live behind jargon and paywalls. The best research stories are the
          ones that make you feel something — curiosity, wonder, maybe even a little outrage. I believe
          every scientific finding has a human story worth telling.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-white mb-8">My Approach</h2>
      <div class="grid sm:grid-cols-2 gap-6">
        <div class="glass-card p-6">
          <h3 class="font-bold text-white mb-2">🎯 Clarity Without Dumbing Down</h3>
          <p class="text-sm text-slate-400">Explaining complex ideas in simple language without losing the substance or accuracy.</p>
        </div>
        <div class="glass-card p-6">
          <h3 class="font-bold text-white mb-2">🌍 Context Matters</h3>
          <p class="text-sm text-slate-400">Connecting research findings to the bigger picture — why it matters, who benefits, what's next.</p>
        </div>
        <div class="glass-card p-6">
          <h3 class="font-bold text-white mb-2">🎨 Visual Communication</h3>
          <p class="text-sm text-slate-400">Using diagrams, infographics, and visual storytelling to make data intuitive.</p>
        </div>
        <div class="glass-card p-6">
          <h3 class="font-bold text-white mb-2">🤔 Honest About Uncertainty</h3>
          <p class="text-sm text-slate-400">Science is messy. Good storytelling acknowledges what we don't know, not just what we do.</p>
        </div>
      </div>

      <NuxtLink to="/creative/blog" class="back-link">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
        Back to Blog
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Science Storytelling — Riti Sharma',
  ogTitle: 'Science Storytelling — Riti Sharma',
  description: 'My approach to making complex science accessible — clarity, context, visual communication, and honesty about uncertainty.',
  ogDescription: 'How Riti Sharma approaches science storytelling and communication.',
  ogImage: '/images/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>
