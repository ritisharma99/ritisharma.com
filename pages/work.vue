<template>
  <div>
    <PageHeader title="Work" subtitle="Education, experience, and research" />

    <!-- Tab Navigation -->
    <div class="max-w-5xl mx-auto px-6">
      <div class="flex gap-1 bg-dark-700/50 rounded-2xl p-1 mb-12 w-fit mx-auto">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
          :class="activeTab === tab.id
            ? 'bg-gradient-brand text-white shadow-lg'
            : 'text-slate-400 hover:text-white'"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>

    <!-- Education -->
    <div v-show="activeTab === 'education'" class="max-w-5xl mx-auto px-6 pb-20">
      <div class="space-y-8">
        <div v-for="item in education" :key="item._path" class="glass-card p-8 flex flex-col md:flex-row gap-6">
          <InstitutionBadge v-if="institutionKey(item.institution)" :institution="institutionKey(item.institution)!" />
          <div class="flex-1">
            <span class="text-xs font-semibold uppercase tracking-wider text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full">{{ item.date_range }}</span>
            <h3 class="text-xl font-bold text-white mt-3 mb-1">{{ item.title }} — {{ item.field }}</h3>
            <p class="text-brand-teal font-medium mb-1">{{ item.institution }}, {{ item.location }}</p>
            <p v-if="item.grade" class="text-sm text-slate-500 mb-3">{{ item.grade }}</p>
            <p v-if="item.thesis" class="text-slate-300 leading-relaxed">
              <strong class="text-slate-200">Thesis:</strong> {{ item.thesis }}
            </p>
            <p v-if="item.description" class="text-slate-400 mt-2 leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Experience -->
    <div v-show="activeTab === 'experience'" class="max-w-5xl mx-auto px-6 pb-20 space-y-16">
      <div>
        <h2 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center">🔬</span>
          Research Journey
        </h2>
        <div class="space-y-6 border-l-2 border-slate-700 pl-8 ml-4">
          <ExperienceItem
            v-for="item in experienceByCategory.research"
            :key="item._path"
            :date="item.date_range"
            :title="item.title"
            :org="item.org"
            :description="item.description"
          />
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center">📚</span>
          Teaching & Mentoring
        </h2>
        <div class="space-y-6 border-l-2 border-slate-700 pl-8 ml-4">
          <ExperienceItem
            v-for="item in experienceByCategory.teaching"
            :key="item._path"
            :date="item.date_range"
            :title="item.title"
            :org="item.org"
            :description="item.description"
          />
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center">💼</span>
          Internships
        </h2>
        <div class="space-y-6 border-l-2 border-slate-700 pl-8 ml-4">
          <ExperienceItem
            v-for="item in experienceByCategory.internship"
            :key="item._path"
            :date="item.date_range"
            :title="item.title"
            :org="item.org"
            :description="item.description"
          />
        </div>
      </div>
    </div>

    <!-- Research -->
    <div v-show="activeTab === 'research'" class="max-w-5xl mx-auto px-6 pb-20 space-y-16">
      <!-- Publications -->
      <div>
        <h2 class="text-2xl font-bold text-white mb-8">Publications</h2>
        <div class="space-y-6">
          <div v-for="item in publications" :key="item._path" class="glass-card p-6 flex gap-6">
            <span class="text-brand-teal font-bold text-sm w-12 flex-shrink-0 pt-1">{{ item.year }}</span>
            <div>
              <h3 class="text-white font-semibold leading-snug">{{ item.title }}</h3>
              <p class="text-brand-teal text-sm mt-1">
                {{ item.venue }}
                <span class="text-slate-500">· {{ item.status }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Talks & Awards -->
      <div>
        <h2 class="text-2xl font-bold text-white mb-8">Talks & Presentations</h2>
        <div class="space-y-4">
          <div v-for="item in talks" :key="item._path" class="glass-card p-6 flex gap-6 items-start">
            <span class="text-brand-teal font-bold text-sm w-12 flex-shrink-0 pt-1">{{ item.year }}</span>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2 mb-1">
                <h3 class="text-white font-semibold">{{ item.conference }}</h3>
                <span v-if="item.award" class="text-xs font-semibold text-yellow-300 bg-yellow-300/10 px-2 py-0.5 rounded-full">{{ item.award }}</span>
              </div>
              <p class="text-slate-300 text-sm">{{ item.title }}</p>
              <NuxtLink
                v-if="item.link"
                :to="item.link"
                class="text-brand-teal text-sm hover:text-brand-light-teal transition-colors mt-1 inline-block"
              >
                View poster →
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type EducationDoc = {
  _path: string
  title: string
  field: string
  institution: string
  location: string
  date_range: string
  grade?: string
  thesis?: string
  description?: string
}

type ExperienceDoc = {
  _path: string
  title: string
  org: string
  date_range: string
  category: 'research' | 'teaching' | 'internship'
  description: string
}

type PublicationDoc = {
  _path: string
  title: string
  year: number
  venue: string
  status: string
}

type TalkDoc = {
  _path: string
  title: string
  year: number
  conference: string
  award?: string
  link?: string
}

const route = useRoute()
const router = useRouter()

const tabs = [
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
]

const validTabs = new Set(tabs.map((tab) => tab.id))

// Allow deep-linking via ?tab=experience etc.
const activeTab = ref(validTabs.has(route.query.tab as string) ? (route.query.tab as string) : 'education')

watch(activeTab, (tab) => {
  router.replace({ query: { ...route.query, tab } })
})

watch(() => route.query.tab, (tab) => {
  if (tab && validTabs.has(tab as string)) {
    activeTab.value = tab as string
  }
})

const { data: education } = await useAsyncData<EducationDoc[]>('education-list', () =>
  queryContent('/education').sort({ order: 1 }).find(),
)

const { data: experiences } = await useAsyncData<ExperienceDoc[]>('experience-list', () =>
  queryContent('/experience').sort({ order: 1 }).find(),
)

const { data: publications } = await useAsyncData<PublicationDoc[]>('publication-list', () =>
  queryContent('/publications').sort({ year: -1 }).find(),
)

const { data: talks } = await useAsyncData<TalkDoc[]>('talk-list', () =>
  queryContent('/talks').sort({ year: -1 }).find(),
)

const experienceByCategory = computed(() => ({
  research: (experiences.value || []).filter((item) => item.category === 'research'),
  teaching: (experiences.value || []).filter((item) => item.category === 'teaching'),
  internship: (experiences.value || []).filter((item) => item.category === 'internship'),
}))

function institutionKey(name: string) {
  if (name.includes('Penn')) return 'upenn' as const
  if (name.includes('Auckland')) return 'auckland' as const
  if (name.includes('Manipal')) return 'manipal' as const
  return null
}

useSeoMeta({
  title: 'Work — Riti Sharma',
  ogTitle: 'Work — Riti Sharma',
  description: 'Education, experience, and research — PhD at UPenn, M.Eng at Auckland, publications in bone biomechanics.',
  ogDescription: 'Education, experience and research by Riti Sharma.',
  ogImage: '/images/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>
