<template>
  <div>
    <PageHeader title="Learning New Tools" subtitle="Staying curious and picking up new skills" />

    <div class="max-w-4xl mx-auto px-6 pb-20">
      <p class="text-slate-300 text-lg leading-relaxed mb-12">
        Being a researcher means being a permanent student. But I don't limit that learning to
        the lab — I actively seek out new skills, whether they're mechanical, digital, or creative.
      </p>

      <div class="space-y-6 mb-12">
        <div class="glass-card p-8">
          <h3 class="text-lg font-bold text-white mb-2">🔧 Mechanical Mastery: Learning How to Change a Turbo</h3>
          <p class="text-slate-400 leading-relaxed">
            Getting hands-on with car mechanics — understanding turbocharger systems, removal,
            and installation. There's a deep satisfaction in understanding how machines work from the inside.
          </p>
        </div>
        <div class="glass-card p-8">
          <h3 class="text-lg font-bold text-white mb-2">🎨 Design & Visualization: Fusion 360</h3>
          <p class="text-slate-400 leading-relaxed">
            Learning parametric CAD modeling for 3D printing projects and engineering design.
            From concept sketches to printable models in a single workflow.
          </p>
        </div>
        <div class="glass-card p-8">
          <h3 class="text-lg font-bold text-white mb-2">🎬 Creative Production: DaVinci Resolve</h3>
          <p class="text-slate-400 leading-relaxed">
            Video editing and color grading — telling visual stories. Whether it's documenting
            a road trip or explaining research, video is a powerful medium.
          </p>
        </div>
      </div>

      <p class="text-slate-400 text-lg leading-relaxed italic">
        The best tool is the one you actually learn to use well. I'd rather master a few than dabble in many.
      </p>

      <NuxtLink to="/creative" class="back-link">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
        Back to Creative
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Learning New Tools — Riti Sharma',
  ogTitle: 'Learning New Tools — Riti Sharma',
  description: 'Continuous learning — from turbo mechanics to Fusion 360 CAD modeling and DaVinci Resolve video editing.',
  ogDescription: 'Picking up new skills — CAD, video editing, and mechanical work.',
  ogImage: '/images/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>
