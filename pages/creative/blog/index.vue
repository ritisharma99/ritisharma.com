<template>
  <div>
    <PageHeader title="Blog" subtitle="Thoughts on science, storytelling, and life" />

    <div class="max-w-4xl mx-auto px-6 pb-20">
      <div class="space-y-6">
        <NuxtLink to="/creative/blog/science-storytelling" class="glass-card p-8 group block">
          <h3 class="text-xl font-bold text-white group-hover:text-brand-teal transition-colors">
            Science Storytelling
          </h3>
          <p class="text-slate-400 mt-2">Making complex science accessible and engaging through storytelling.</p>
        </NuxtLink>

        <div class="glass-card p-8 opacity-60">
          <h3 class="text-xl font-bold text-white">Going Down to the Nanoscale</h3>
          <p class="text-slate-400 mt-2">Coming soon...</p>
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
  title: 'Blog — Riti Sharma',
  ogTitle: 'Blog — Riti Sharma',
  description: 'Blog posts about science storytelling, nanoscale research, and reflections from the lab and beyond.',
  ogDescription: 'Blog posts by Riti Sharma on science, storytelling, and research.',
  ogImage: '/images/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>
