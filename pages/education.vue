<template>
  <div>
    <PageHeader title="Education" subtitle="My academic journey across continents" />

    <div class="max-w-5xl mx-auto px-6 pb-20">
      <div class="space-y-8">
        <!-- PhD -->
        <div class="glass-card p-8 flex flex-col md:flex-row gap-6">
          <div class="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center text-2xl">
            🎓
          </div>
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-3 mb-2">
              <span class="text-xs font-semibold uppercase tracking-wider text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full">
                Sept 2022 – Present
              </span>
            </div>
            <h3 class="text-xl font-bold text-white mb-1">PhD — Mechanical Engineering and Applied Mechanics</h3>
            <p class="text-brand-teal font-medium mb-3">University of Pennsylvania, USA</p>
            <p class="text-slate-400 leading-relaxed">
              <strong class="text-slate-300">Thesis:</strong> Resolving nanoscale fatigue responses in mineralized collagen fibrils (bone) in 3D
            </p>
            <p class="text-slate-400 mt-2 leading-relaxed">
              Using synchrotron X-ray tomography at Brookhaven National Laboratory (NSLS-II) to study how bone resists fatigue at the fibril scale.
            </p>
          </div>
        </div>

        <!-- M.Eng -->
        <div class="glass-card p-8 flex flex-col md:flex-row gap-6">
          <div class="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center text-2xl">
            🔬
          </div>
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-3 mb-2">
              <span class="text-xs font-semibold uppercase tracking-wider text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full">
                Jul 2020 – Jul 2021
              </span>
            </div>
            <h3 class="text-xl font-bold text-white mb-1">M.Eng (Research) — Bioengineering</h3>
            <p class="text-brand-teal font-medium mb-1">Auckland Bioengineering Institute, University of Auckland, New Zealand</p>
            <p class="text-sm text-slate-500 mb-3">First-class honours · Grade A</p>
            <p class="text-slate-400 leading-relaxed">
              <strong class="text-slate-300">Thesis:</strong> Impact of mitochondrial organization on cardiac energetics and force dynamics in type-2 diabetes
            </p>
          </div>
        </div>

        <!-- B.Tech -->
        <div class="glass-card p-8 flex flex-col md:flex-row gap-6">
          <div class="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center text-2xl">
            ⚙️
          </div>
          <div class="flex-1">
            <div class="flex flex-wrap items-center gap-3 mb-2">
              <span class="text-xs font-semibold uppercase tracking-wider text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full">
                Aug 2016 – May 2020
              </span>
            </div>
            <h3 class="text-xl font-bold text-white mb-1">B.Tech — Mechanical Engineering</h3>
            <p class="text-brand-teal font-medium mb-3">Manipal Institute of Technology, India</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Education — Riti Sharma',
  ogTitle: 'Education — Riti Sharma',
  description: 'Academic journey from B.Tech in Mechanical Engineering (India) to M.Eng at Auckland Bioengineering Institute to PhD at UPenn.',
  ogDescription: 'Academic journey from B.Tech in India to PhD at the University of Pennsylvania.',
  ogImage: '/images/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>
