<template>
  <div class="relative">
    <!-- Timeline dot -->
    <div
      class="absolute -left-[2.55rem] top-3.5 w-4 h-4 rounded-full border-2 transition-colors duration-300"
      :class="open ? 'bg-brand-teal border-brand-teal' : 'bg-dark-800 border-brand-teal'"
    />

    <div class="glass-card overflow-hidden">
      <!-- Collapsed header -->
      <button
        class="w-full flex items-center gap-3 px-5 py-2.5 text-left"
        :aria-expanded="open"
        @click="open = !open"
      >
        <span class="text-xs font-semibold text-brand-teal bg-brand-teal/10 px-2.5 py-0.5 rounded-full flex-shrink-0 whitespace-nowrap">
          {{ doc.date_range }}
        </span>
        <div class="flex-1 min-w-0 truncate">
          <span class="text-white font-semibold text-sm">{{ doc.title }}</span>
          <span class="text-slate-600 text-sm"> &middot; </span>
          <span class="text-slate-400 text-sm">{{ doc.org }}</span>
        </div>
        <svg
          class="w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-300"
          :class="{ 'rotate-180 text-brand-teal': open }"
          fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <!-- Expanded detail — v-show keeps it in SSR output to prevent hydration mismatch -->
      <div
        v-show="open"
        class="border-t border-slate-700/50 px-5 pb-5 pt-4"
      >
        <p class="text-slate-300 text-sm leading-relaxed mb-4">{{ doc.description }}</p>
        <div class="flex flex-col md:flex-row gap-6">
          <div class="flex-1 experience-body">
            <ContentRenderer :value="doc" />
          </div>
          <div v-if="doc.image" class="md:w-44 flex-shrink-0">
            <NuxtImg
              :src="doc.image"
              :alt="doc.title"
              class="rounded-xl w-full object-cover aspect-square"
              width="176"
              height="176"
              format="webp"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  doc: Record<string, any>
}>()

const open = ref(false)
</script>

<style scoped>
.experience-body :deep(p) {
  @apply text-slate-400 text-sm leading-relaxed mb-3;
}
.experience-body :deep(p:last-child) {
  @apply mb-0;
}
.experience-body :deep(strong) {
  @apply text-slate-300 font-semibold;
}
.experience-body :deep(em) {
  @apply italic text-slate-300;
}
</style>
