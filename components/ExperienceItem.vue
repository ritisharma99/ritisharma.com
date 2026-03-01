<template>
  <div class="relative">
    <!-- Timeline dot -->
    <div class="absolute -left-[2.55rem] top-1.5 w-4 h-4 rounded-full bg-dark-800 border-2 border-brand-teal"></div>

    <div class="glass-card p-6">
      <span class="text-xs font-semibold uppercase tracking-wider text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full">
        {{ date }}
      </span>
      <h3 class="text-lg font-bold text-white mt-3">{{ title }}</h3>
      <p class="text-brand-teal text-sm font-medium mt-1">{{ org }}</p>
      <p class="text-slate-400 mt-2 leading-relaxed text-sm">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  date: string
  title: string
  org: string
  description: string
}>()
</script>
