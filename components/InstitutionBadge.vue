<template>
  <div
    class="rounded-2xl bg-[rgb(255,255,255)] border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden flex-shrink-0 p-3"
    style="width: 120px; height: 72px;"
    :title="config[institution].name"
  >
    <NuxtImg
      :src="logoSrc[institution]"
      :alt="config[institution].name"
      class="max-w-full max-h-full object-contain"
      width="120"
      height="72"
      format="webp"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  institution: 'upenn' | 'auckland' | 'manipal'
}>()

const config: Record<string, { name: string }> = {
  upenn:   { name: 'University of Pennsylvania' },
  auckland: { name: 'University of Auckland' },
  manipal: { name: 'Manipal Institute of Technology' },
}

const logoSrc = {
  upenn: '/images/institutions/upenn-light.png',
  auckland: '/images/institutions/auckland.png',
  manipal: '/images/institutions/manipal.png',
} as const
</script>
