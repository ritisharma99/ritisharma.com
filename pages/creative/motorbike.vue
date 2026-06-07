<template>
  <div>
    <PageHeader title="Freedom on Two Wheels" subtitle="Learning to master how to ride a motorcycle" />

    <div class="max-w-4xl mx-auto px-6 pb-20">
      <div class="glass-card overflow-hidden mb-8">
        <NuxtImg
          :src="activePhoto.src"
          :alt="activePhoto.alt"
          class="w-full h-[300px] md:h-[440px] object-cover"
          width="1400"
          height="900"
          format="webp"
        />
      </div>

      <div class="glass-card p-4 md:p-5 mb-10">
        <div class="flex items-center justify-between gap-4 mb-4">
          <div>
            <h2 class="text-lg font-bold text-slate-900">Licence Day Gallery</h2>
            <p class="text-sm text-slate-500">From first practice sessions in Auckland to buying a GN125 and later graduating to an R3.</p>
          </div>
          <div class="flex items-center gap-2">
            <button
              type="button"
              class="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-brand-teal hover:border-teal-400/40 transition-colors"
              aria-label="Previous photo"
              @click="showPreviousPhoto"
            >
              <svg class="w-4 h-4 mx-auto" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button
              type="button"
              class="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-brand-teal hover:border-teal-400/40 transition-colors"
              aria-label="Next photo"
              @click="showNextPhoto"
            >
              <svg class="w-4 h-4 mx-auto" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
          <button
            v-for="(photo, index) in photos"
            :key="photo.src"
            type="button"
            class="relative overflow-hidden rounded-2xl border-2 transition-all duration-200"
            :class="index === activePhotoIndex ? 'border-brand-teal shadow-sm' : 'border-transparent hover:border-teal-300/50'"
            @click="activePhotoIndex = index"
          >
            <NuxtImg
              :src="photo.src"
              :alt="photo.alt"
              class="h-24 w-full object-cover"
              width="320"
              height="220"
              format="webp"
              loading="lazy"
            />
          </button>
        </div>
      </div>

      <div class="text-slate-700 text-lg leading-relaxed space-y-6 mb-12">
        <p>
          Freedom on two wheels started as curiosity and quickly turned into a real milestone. I got my
          motorcycle licence in New Zealand, bought a GN125, and later that same year moved up to a Yamaha R3.
          Each step made riding feel a little less intimidating and a lot more liberating.
        </p>
        <p>
          Learning to ride taught me that confidence is built through repetition, judgement, and respect for
          the machine. There is a surprising amount of technique behind smooth control, from clutch work and
          slow-speed balance to reading corners and staying relaxed under pressure.
        </p>
        <p>
          What I love most is the sense of independence that comes with mastering it. Riding combines engineering,
          focus, and adventure in a way that feels deeply personal, and every upgrade from the GN125 to the R3 felt
          like proof of progress.
        </p>
      </div>

      <NuxtLink to="/creative" class="back-link">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
        Back to Beyond the Lab
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const photos = [
  {
    src: '/images/creative/motorbike/license-day-portrait.jpeg',
    alt: 'Standing with motorcycle helmet after earning a motorcycle licence in New Zealand',
  },
  {
    src: '/images/creative/motorbike/garage-first-ride.jpg',
    alt: 'Riding a motorcycle through a parking garage during early practice sessions',
  },
  {
    src: '/images/creative/motorbike/helmet-check.jpg',
    alt: 'Getting helmet help before a motorcycle ride',
  },
  {
    src: '/images/creative/motorbike/gn125-ready.jpg',
    alt: 'Sitting on a GN125 during early riding practice',
  },
  {
    src: '/images/creative/motorbike/celebration-photo.jpg',
    alt: 'Celebrating beside a motorcycle after a riding session',
  },
]

const activePhotoIndex = ref(0)
const activePhoto = computed(() => photos[activePhotoIndex.value])

function showPreviousPhoto() {
  activePhotoIndex.value = (activePhotoIndex.value - 1 + photos.length) % photos.length
}

function showNextPhoto() {
  activePhotoIndex.value = (activePhotoIndex.value + 1) % photos.length
}

useSeoMeta({
  title: 'Freedom on Two Wheels | Riti Sharma',
  ogTitle: 'Freedom on Two Wheels | Riti Sharma',
  description: 'Learning to master how to ride a motorcycle in New Zealand, earning a licence, buying a GN125, and graduating to an R3.',
  ogDescription: 'From a New Zealand motorcycle licence to a GN125 and then an R3, a personal story of learning to ride.',
  ogImage: '/images/creative/motorbike/license-day-portrait.jpeg',
  twitterCard: 'summary_large_image',
})
</script>
