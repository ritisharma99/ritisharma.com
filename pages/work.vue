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
        <div class="glass-card p-8 flex flex-col md:flex-row gap-6">
          <div class="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center text-2xl">🎓</div>
          <div class="flex-1">
            <span class="text-xs font-semibold uppercase tracking-wider text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full">Sept 2022 – Present</span>
            <h3 class="text-xl font-bold text-white mt-3 mb-1">PhD — Mechanical Engineering and Applied Mechanics</h3>
            <p class="text-brand-teal font-medium mb-3">University of Pennsylvania, USA</p>
            <p class="text-slate-400 leading-relaxed">
              <strong class="text-slate-300">Thesis:</strong> Resolving nanoscale fatigue responses in mineralized collagen fibrils (bone) in 3D
            </p>
            <p class="text-slate-400 mt-2 leading-relaxed">
              Using synchrotron X-ray tomography at Brookhaven National Laboratory (NSLS-II) to study how bone resists fatigue at the fibril scale.
            </p>
          </div>
        </div>

        <div class="glass-card p-8 flex flex-col md:flex-row gap-6">
          <div class="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center text-2xl">🔬</div>
          <div class="flex-1">
            <span class="text-xs font-semibold uppercase tracking-wider text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full">Jul 2020 – Jul 2021</span>
            <h3 class="text-xl font-bold text-white mt-3 mb-1">M.Eng (Research) — Bioengineering</h3>
            <p class="text-brand-teal font-medium mb-1">Auckland Bioengineering Institute, University of Auckland, New Zealand</p>
            <p class="text-sm text-slate-500 mb-3">First-class honours · Grade A</p>
            <p class="text-slate-400 leading-relaxed">
              <strong class="text-slate-300">Thesis:</strong> Impact of mitochondrial organization on cardiac energetics and force dynamics in type-2 diabetes
            </p>
          </div>
        </div>

        <div class="glass-card p-8 flex flex-col md:flex-row gap-6">
          <div class="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center text-2xl">⚙️</div>
          <div class="flex-1">
            <span class="text-xs font-semibold uppercase tracking-wider text-brand-teal bg-brand-teal/10 px-3 py-1 rounded-full">Aug 2016 – May 2020</span>
            <h3 class="text-xl font-bold text-white mt-3 mb-1">B.Tech — Mechanical Engineering</h3>
            <p class="text-brand-teal font-medium">Manipal Institute of Technology, India</p>
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
          <ExperienceItem date="2022 – Present" title="PhD Researcher" org="University of Pennsylvania" description="Investigating nanoscale fatigue in mineralized collagen fibrils using synchrotron X-ray nano-tomography at NSLS-II, Brookhaven National Laboratory." />
          <ExperienceItem date="2021 – 2022" title="Research Assistant" org="Auckland Bioengineering Institute" description="Studied the impact of diabetes on cardiomyocyte energy metabolism and force dynamics using computational modeling." />
          <ExperienceItem date="2020" title="Research Intern" org="Auckland Bioengineering Institute" description="Developed cardiac models investigating atrial fibrillation mechanisms." />
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center">📚</span>
          Teaching & Mentoring
        </h2>
        <div class="space-y-6 border-l-2 border-slate-700 pl-8 ml-4">
          <ExperienceItem date="2024 – Present" title="Teaching Assistant" org="University of Pennsylvania" description="Courses: Dynamic Systems, Statics and Mechanics of Solids." />
          <ExperienceItem date="2023 – 2024" title="Mentor" org="University of Pennsylvania" description="Mentoring high school and undergraduate students, bridging the gap between curriculum and research." />
          <ExperienceItem date="2023 – 2024" title="Vice President, MEGA" org="University of Pennsylvania" description="Organized community events and professional development for graduate engineering students." />
        </div>
      </div>

      <div>
        <h2 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center">💼</span>
          Internships
        </h2>
        <div class="space-y-6 border-l-2 border-slate-700 pl-8 ml-4">
          <ExperienceItem date="2021" title="Patent Intern" org="Davies Collison Cave, New Zealand" description="Worked on analyzing and drafting patent documentation." />
          <ExperienceItem date="Dec 2020" title="Business & Strategy Intern" org="Mercury Energy + University of Auckland, New Zealand" description="Developed an electric vehicle business model at the intersection of energy and transport." />
          <ExperienceItem date="May – Jun 2019" title="Mechanical Engineering Intern" org="Honda Cars India" description="Focused on MUDA waste reduction processes in manufacturing." />
          <ExperienceItem date="Jun – Jul 2018" title="Research Intern" org="IIT BHU, India" description="Conducted computational fluid dynamics (CFD) research." />
        </div>
      </div>
    </div>

    <!-- Research -->
    <div v-show="activeTab === 'research'" class="max-w-5xl mx-auto px-6 pb-20 space-y-16">
      <!-- Publications -->
      <div>
        <h2 class="text-2xl font-bold text-white mb-8">Publications</h2>
        <div class="space-y-6">
          <div class="glass-card p-6 flex gap-6">
            <span class="text-brand-teal font-bold text-sm w-10 flex-shrink-0 pt-1">2025</span>
            <div>
              <h3 class="text-white font-semibold leading-snug">Bone Resists Fatigue through Crack Deceleration at the Fibril Scale</h3>
              <p class="text-brand-teal text-sm mt-1">Science Advances <span class="text-slate-500">· In review</span></p>
            </div>
          </div>
          <div class="glass-card p-6 flex gap-6">
            <span class="text-brand-teal font-bold text-sm w-10 flex-shrink-0 pt-1">2021</span>
            <div>
              <h3 class="text-white font-semibold leading-snug">Impact of mitochondrial organization on bioenergetics and force dynamics in diabetic myocardium</h3>
              <p class="text-brand-teal text-sm mt-1">M.Eng. Dissertation <span class="text-slate-500">· University of Auckland</span></p>
            </div>
          </div>
        </div>
      </div>

      <!-- Talks & Awards -->
      <div>
        <h2 class="text-2xl font-bold text-white mb-8">Talks & Presentations</h2>
        <div class="space-y-4">
          <div class="glass-card p-6 flex gap-6 items-start">
            <span class="text-brand-teal font-bold text-sm w-10 flex-shrink-0 pt-1">2025</span>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2 mb-1">
                <h3 class="text-white font-semibold">SES 2025</h3>
              </div>
              <p class="text-slate-400 text-sm">Bone Resists Fatigue through Crack Deceleration at the Fibril Scale</p>
              <NuxtLink to="/posters/ses-2025" class="text-brand-teal text-sm hover:text-brand-light-teal transition-colors mt-1 inline-block">View poster →</NuxtLink>
            </div>
          </div>
          <div class="glass-card p-6 flex gap-6 items-start">
            <span class="text-brand-teal font-bold text-sm w-10 flex-shrink-0 pt-1">2024</span>
            <div class="flex-1">
              <h3 class="text-white font-semibold">SB3C 2024</h3>
              <p class="text-slate-400 text-sm">Resolving deformations of mineralized collagen fibrils in 3D</p>
              <NuxtLink to="/posters/sb3c-2024" class="text-brand-teal text-sm hover:text-brand-light-teal transition-colors mt-1 inline-block">View poster →</NuxtLink>
            </div>
          </div>
          <div class="glass-card p-6 flex gap-6 items-start">
            <span class="text-brand-teal font-bold text-sm w-10 flex-shrink-0 pt-1">2023</span>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2 mb-1">
                <h3 class="text-white font-semibold">PCMD 2023</h3>
                <span class="text-xs font-semibold text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded-full">🏆 Poster Award</span>
              </div>
              <p class="text-slate-400 text-sm">Resolving deformations of mineralized collagen fibrils in 3D</p>
              <NuxtLink to="/posters/pcmd-2023" class="text-brand-teal text-sm hover:text-brand-light-teal transition-colors mt-1 inline-block">View poster →</NuxtLink>
            </div>
          </div>
          <div class="glass-card p-6 flex gap-6 items-start">
            <span class="text-brand-teal font-bold text-sm w-10 flex-shrink-0 pt-1">2023</span>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2 mb-1">
                <h3 class="text-white font-semibold">SES 2023</h3>
                <span class="text-xs font-semibold text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded-full">🏆 Poster Award</span>
              </div>
              <p class="text-slate-400 text-sm">Resolving deformations of mineralized collagen fibrils in 3D</p>
              <NuxtLink to="/posters/ses-2023" class="text-brand-teal text-sm hover:text-brand-light-teal transition-colors mt-1 inline-block">View poster →</NuxtLink>
            </div>
          </div>
          <div class="glass-card p-6 flex gap-6 items-start">
            <span class="text-brand-teal font-bold text-sm w-10 flex-shrink-0 pt-1">2021</span>
            <div class="flex-1">
              <h3 class="text-white font-semibold">Auckland Bioengineering Institute Forum 2021</h3>
              <p class="text-slate-400 text-sm">Impact of mitochondrial organization on myofibrillar force in diabetes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const tabs = [
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
]

// Allow deep-linking via ?tab=experience etc.
const activeTab = ref((route.query.tab as string) || 'education')

watch(() => route.query.tab, (tab) => {
  if (tab) activeTab.value = tab as string
})

useSeoMeta({
  title: 'Work — Riti Sharma',
  ogTitle: 'Work — Riti Sharma',
  description: 'Education, experience, and research — PhD at UPenn, M.Eng at Auckland, publications in bone biomechanics.',
  ogDescription: 'Education, experience and research by Riti Sharma.',
  ogImage: '/images/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>
