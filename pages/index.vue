<template>
  <div>
    <!-- ─── Hero ─────────────────────────────────────────────────── -->
    <section class="min-h-screen flex items-center pt-20">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div class="order-2 md:order-1">
          <div class="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 mb-6">
            <span class="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
            <span class="text-teal-700 text-sm font-medium">Open to positions · Graduating Aug 2027</span>
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            {{ heroPrefix }}
            <span class="gradient-text block">Riti Sharma</span>
          </h1>
          <p class="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
            {{ homePage?.hero_subtitle }}
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="#work" class="btn-primary">
              View Work
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </a>
            <a href="/files/riti-sharma-cv.pdf" target="_blank" rel="noopener" class="btn-secondary">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              Download CV
            </a>
          </div>
          <div class="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-slate-400">
            <span class="flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-brand-teal" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>
              UPenn · Philadelphia
            </span>
            <span class="flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-brand-teal" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>
              Brookhaven National Lab
            </span>
            <span class="flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5 text-brand-teal" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>
              Drexel University
            </span>
          </div>
        </div>
        <div class="order-1 md:order-2 flex justify-center">
          <div class="relative w-64 h-64 md:w-80 md:h-80 animate-float">
            <div class="absolute inset-0 rounded-full bg-gradient-brand opacity-10 blur-3xl"></div>
            <div class="relative w-full h-full rounded-full p-1 bg-gradient-brand">
              <NuxtImg
                :src="homePage?.profile_image || '/images/Riti_Sharma.png'"
                alt="Riti Sharma, PhD candidate, experimental mechanics, UPenn"
                class="w-full h-full rounded-full object-cover"
                width="320"
                height="320"
                loading="eager"
                format="webp"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Stats ─────────────────────────────────────────────────── -->
    <section class="py-10">
      <div class="max-w-4xl mx-auto px-6">
        <div class="glass-card p-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div class="text-2xl font-bold gradient-text">2+</div>
            <div class="text-xs text-slate-400 mt-1 uppercase tracking-wider">Poster Awards</div>
          </div>
          <div>
            <div class="text-2xl font-bold gradient-text">3D</div>
            <div class="text-xs text-slate-400 mt-1 uppercase tracking-wider">Nanoscale Imaging</div>
          </div>
          <div>
            <div class="text-2xl font-bold gradient-text">NSLS-II</div>
            <div class="text-xs text-slate-400 mt-1 uppercase tracking-wider">Synchrotron</div>
          </div>
          <div>
            <div class="text-2xl font-bold gradient-text">2027</div>
            <div class="text-xs text-slate-400 mt-1 uppercase tracking-wider">PhD Expected</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── About ──────────────────────────────────────────────────── -->
    <section class="py-20 bg-slate-50">
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="section-title text-center mb-12">About Me</h2>
        <div class="space-y-6 text-slate-700 text-lg leading-relaxed">
          <p>{{ homePage?.about_p1 }}</p>
          <p>{{ homePage?.about_p2 }}</p>
        </div>
        <div class="flex flex-wrap gap-2 mt-8">
          <span
            v-for="tag in researchTags"
            :key="tag"
            class="text-xs font-medium text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full"
          >{{ tag }}</span>
        </div>
      </div>
    </section>

    <!-- ─── Work ─────────────────────────────────────────────────── -->
    <section id="work" class="py-20 bg-slate-50">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-10">
          <h2 class="section-title mb-3">Work</h2>
          <p class="text-slate-500 max-w-2xl mx-auto">Education, experience, publications, and talks in one place without turning the homepage into a long scroll.</p>
        </div>

        <div class="flex justify-center mb-10">
          <div class="inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-slate-900/5 dark:bg-slate-900/60 p-2">
            <button
              v-for="tab in workTabs"
              :key="tab.id"
              type="button"
              class="rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200"
              :class="activeWorkTab === tab.id
                ? 'bg-gradient-brand text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-300 hover:text-brand-teal'"
              @click="activeWorkTab = tab.id"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>

        <div v-if="activeWorkTab === 'education'" class="space-y-6">
          <div v-for="item in education" :key="item._path" class="glass-card p-8 flex flex-col md:flex-row gap-6">
            <InstitutionBadge v-if="institutionKey(item.institution)" :institution="institutionKey(item.institution)!" />
            <div class="flex-1">
              <span class="text-xs font-semibold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">{{ item.date_range }}</span>
              <h3 class="text-xl font-bold text-slate-900 mt-3 mb-1">{{ item.title }}, {{ item.field }}</h3>
              <p class="text-brand-teal font-medium mb-1">{{ item.institution }}, {{ item.location }}</p>
              <p v-if="item.grade" class="text-sm text-slate-500 mb-3">{{ item.grade }}</p>
              <p v-if="item.thesis" class="text-slate-700 leading-relaxed">
                <strong class="text-slate-800">Thesis:</strong> {{ item.thesis }}
              </p>
              <p v-if="item.description" class="text-slate-600 mt-2 leading-relaxed text-sm">{{ item.description }}</p>
            </div>
          </div>
        </div>

        <div v-else-if="activeWorkTab === 'experience'" class="space-y-12">
          <div>
            <h3 class="text-lg font-semibold text-slate-700 mb-6 flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-teal-50 flex items-center justify-center text-sm">🔬</span>
              Research
            </h3>
            <div class="space-y-3 border-l-2 border-slate-200 dark:border-slate-700 pl-8 ml-3">
              <ExperienceItem v-for="item in experienceByCategory.research" :key="item._path" :doc="item" />
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-slate-700 mb-6 flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-teal-50 flex items-center justify-center text-sm">📚</span>
              Teaching & Mentoring
            </h3>
            <div class="space-y-3 border-l-2 border-slate-200 dark:border-slate-700 pl-8 ml-3">
              <ExperienceItem v-for="item in experienceByCategory.teaching" :key="item._path" :doc="item" />
            </div>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-slate-700 mb-6 flex items-center gap-2">
              <span class="w-7 h-7 rounded-lg bg-teal-50 flex items-center justify-center text-sm">💼</span>
              Internships
            </h3>
            <div class="space-y-3 border-l-2 border-slate-200 dark:border-slate-700 pl-8 ml-3">
              <ExperienceItem v-for="item in experienceByCategory.internship" :key="item._path" :doc="item" />
            </div>
          </div>
        </div>

        <div v-else-if="activeWorkTab === 'publications'" class="space-y-5">
          <div v-for="item in publications" :key="item._path" class="glass-card p-6 flex gap-6">
            <span class="text-brand-teal font-bold text-sm w-12 flex-shrink-0 pt-0.5">{{ item.year }}</span>
            <div>
              <h3 class="text-slate-900 font-semibold leading-snug">{{ item.title }}</h3>
              <p class="text-brand-teal text-sm mt-1">
                {{ item.venue }}
                <span class="text-slate-400"> · {{ item.status }}</span>
              </p>
            </div>
          </div>
        </div>

        <div v-else class="space-y-4">
          <div v-for="item in talks" :key="item._path" class="glass-card p-6 flex gap-6 items-start">
            <span class="text-brand-teal font-bold text-sm w-12 flex-shrink-0 pt-0.5">{{ item.year }}</span>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-2 mb-1">
                <h3 class="text-slate-900 font-semibold">{{ item.conference }}</h3>
                <span v-if="item.award" class="text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">{{ item.award }}</span>
              </div>
              <p class="text-slate-600 text-sm">{{ item.title }}</p>
              <NuxtLink v-if="item.link" :to="item.link" class="text-brand-teal text-sm hover:text-brand-dark-teal transition-colors mt-1 inline-block">
                View poster
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── Beyond The Lab ────────────────────────────────────────── -->
    <section id="beyond-the-lab" class="py-20 bg-slate-50">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="section-title text-center mb-3">Beyond the Lab</h2>
        <p class="text-center text-slate-500 mb-12">Creative work, travel, and life outside research</p>
        <div class="grid sm:grid-cols-3 gap-6">
          <NuxtLink
            v-for="project in projects"
            :key="project.to"
            :to="project.to"
            class="glass-card group overflow-hidden block"
          >
            <div class="h-44 bg-slate-100 dark:bg-slate-900/80 relative overflow-hidden">
              <NuxtImg
                :src="project.cover"
                :alt="project.title"
                class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                width="800"
                height="520"
                format="webp"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/15 to-transparent"></div>
            </div>
            <div class="p-6">
              <h3 class="font-semibold text-slate-900 mb-1.5 group-hover:text-brand-teal transition-colors">{{ project.title }}</h3>
              <p class="text-slate-500 text-sm leading-relaxed">{{ project.desc }}</p>
              <span class="inline-flex items-center gap-1 text-brand-teal text-sm font-medium mt-4">
                Explore
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ─── Contact ───────────────────────────────────────────────── -->
    <section id="contact" class="py-20">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="section-title text-center mb-12">Get In Touch</h2>
        <div class="grid md:grid-cols-2 gap-12">
          <div class="space-y-8">
            <p class="text-slate-600 text-lg">
              I'd love to hear from you, whether it's about research collaborations, positions, or just to say hello.
            </p>
            <div class="space-y-4">
              <a href="mailto:sharma.riti99@gmail.com" class="flex items-center gap-4 text-slate-700 hover:text-brand-teal transition-colors group">
                <span class="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors flex-shrink-0">
                  <svg class="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </span>
                sharma.riti99@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/riti-sharma" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 text-slate-700 hover:text-brand-teal transition-colors group">
                <span class="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors flex-shrink-0">
                  <svg class="w-5 h-5 text-brand-teal" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </span>
                linkedin.com/in/riti-sharma
              </a>
              <a href="https://scholar.google.com/citations?user=BY_SLroAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 text-slate-700 hover:text-brand-teal transition-colors group">
                <span class="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors flex-shrink-0">
                  <svg class="w-5 h-5 text-brand-teal" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24a7 7 0 110-14 7 7 0 010 14zm0-24L0 9.5l4.838 3.94A8 8 0 0112 9a8 8 0 017.162 4.44L24 9.5z"/></svg>
                </span>
                Google Scholar
              </a>
              <a href="https://github.com/ritisharma" target="_blank" rel="noopener noreferrer" class="flex items-center gap-4 text-slate-700 hover:text-brand-teal transition-colors group">
                <span class="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors flex-shrink-0">
                  <svg class="w-5 h-5 text-brand-teal" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </span>
                github.com/ritisharma
              </a>
            </div>
          </div>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            class="glass-card p-8 space-y-5"
            @submit.prevent="handleSubmit"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p class="hidden"><label>Don't fill this out if you're human: <input v-model="form.botField" name="bot-field" /></label></p>
            <div>
              <label for="name" class="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
              <input id="name" v-model="form.name" name="name" type="text" required
                class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-colors"
                placeholder="Your name" />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
              <input id="email" v-model="form.email" name="email" type="email" required
                class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-colors"
                placeholder="your@email.com" />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
              <textarea id="message" v-model="form.message" name="message" rows="4" required
                class="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-colors resize-none"
                placeholder="Your message..." />
            </div>
            <button type="submit" class="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed" :disabled="submitState === 'sending'">
              Send Message
            </button>
            <p v-if="submitState === 'success'" class="text-sm text-brand-teal">Message sent successfully. Thank you!</p>
            <p v-if="submitState === 'error'" class="text-sm text-red-500">Message failed to send. Please try again or email directly.</p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
type HomePage = { hero_title?: string; hero_subtitle?: string; about_p1?: string; about_p2?: string; profile_image?: string }
type EducationDoc = { _path: string; title: string; field: string; institution: string; location: string; date_range: string; grade?: string; thesis?: string; description?: string }
type ExperienceDoc = { _path: string; title: string; org: string; date_range: string; category: 'research' | 'teaching' | 'internship'; description: string }
type PublicationDoc = { _path: string; title: string; year: number; venue: string; status: string }
type TalkDoc = { _path: string; title: string; year: number; conference: string; award?: string; link?: string }

useSeoMeta({
  title: 'Riti Sharma | PhD Candidate, Experimental Mechanics & Biomechanics',
  ogTitle: 'Riti Sharma | PhD Candidate, Experimental Mechanics & Biomechanics',
  description: 'PhD candidate at UPenn studying nanoscale fracture mechanics in bone using synchrotron X-ray tomography at Brookhaven National Lab. Expertise in experimental mechanics, viscoelasticity, and materials biomechanics. Graduating August 2027.',
  ogDescription: 'PhD candidate at UPenn studying nanoscale fracture mechanics in bone using synchrotron X-ray tomography at Brookhaven National Lab.',
  ogImage: '/images/og-image.png',
  twitterCard: 'summary_large_image',
})

useHead({
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Riti Sharma',
      jobTitle: 'PhD Candidate, Mechanical Engineering',
      affiliation: { '@type': 'CollegeOrUniversity', name: 'University of Pennsylvania', url: 'https://www.upenn.edu' },
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'Auckland Bioengineering Institute, University of Auckland' },
        { '@type': 'CollegeOrUniversity', name: 'Manipal Institute of Technology' },
      ],
      description: 'PhD candidate in Mechanical Engineering & Applied Mechanics at UPenn. Research on nanoscale fracture mechanics in bone using synchrotron X-ray nano-tomography at NSLS-II, Brookhaven National Laboratory.',
      knowsAbout: ['Experimental Mechanics', 'Nanoscale Fracture Mechanics', 'Synchrotron X-ray Tomography', 'Materials Biomechanics', 'Viscoelasticity', 'Bone Fatigue'],
      url: 'https://ritisharma.com',
      sameAs: ['https://www.linkedin.com/in/riti-sharma', 'https://scholar.google.com/citations?user=BY_SLroAAAAJ&hl=en&oi=ao', 'https://github.com/ritisharma'],
      email: 'sharma.riti99@gmail.com',
    }),
  }],
})

const { data: homePage } = await useAsyncData<HomePage>('home-page', () => queryContent('/pages/home').findOne())
const { data: education } = await useAsyncData<EducationDoc[]>('education-list', () => queryContent('/education').sort({ order: 1 }).find())
const { data: experiences } = await useAsyncData<ExperienceDoc[]>('experience-list', () => queryContent('/experience').sort({ order: 1 }).find())
const { data: publications } = await useAsyncData<PublicationDoc[]>('publication-list', () => queryContent('/publications').sort({ year: -1 }).find())
const { data: talks } = await useAsyncData<TalkDoc[]>('talk-list', () => queryContent('/talks').sort({ year: -1 }).find())
const route = useRoute()

const heroPrefix = computed(() => {
  const title = homePage.value?.hero_title || "Hello, I'm Riti Sharma"
  return title.replace('Riti Sharma', '').trim()
})

const experienceByCategory = computed(() => ({
  research: (experiences.value || []).filter(i => i.category === 'research'),
  teaching: (experiences.value || []).filter(i => i.category === 'teaching'),
  internship: (experiences.value || []).filter(i => i.category === 'internship'),
}))

const workTabs = [
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'publications', label: 'Publications' },
  { id: 'talks', label: 'Talks' },
] as const

type WorkTab = typeof workTabs[number]['id']

function normalizeWorkTab(tab: string | null | undefined): WorkTab {
  if (tab === 'education' || tab === 'experience' || tab === 'publications' || tab === 'talks') return tab
  if (tab === 'research') return 'publications'
  return 'education'
}

const activeWorkTab = ref<WorkTab>(normalizeWorkTab(route.query.tab as string | undefined))

watch(() => route.query.tab, (tab) => {
  activeWorkTab.value = normalizeWorkTab(tab as string | undefined)
})

function institutionKey(name: string) {
  if (name.includes('Penn')) return 'upenn' as const
  if (name.includes('Auckland')) return 'auckland' as const
  if (name.includes('Manipal')) return 'manipal' as const
  return null
}

const researchTags = [
  'Experimental Mechanics', 'Nanoscale Fracture Mechanics', 'Synchrotron X-ray Tomography',
  'Viscoelasticity', 'Materials Biomechanics', 'Bone Fatigue', 'Mineralized Collagen Fibrils',
]

const projects = [
  {
    title: '3D Printing',
    desc: 'Mazda RX-8 scale model and a Harry Potter chess set, designed in Fusion 360 and printed from scratch.',
    cover: '/images/creative/printing/cover.jpg',
    to: '/creative/printing',
  },
  {
    title: 'Freedom on Two Wheels',
    desc: 'Learning to master how to ride a motorcycle in New Zealand, from a licence and GN125 to later graduating to an R3.',
    cover: '/images/creative/motorbike/cover.jpeg',
    to: '/creative/motorbike',
  },
  {
    title: 'Road Trips',
    desc: 'Mountain highways and empty roads across New Zealand, India, and the US East Coast.',
    cover: '/images/creative/trips/cover.jpg',
    to: '/creative/trips',
  },
]

const form = reactive({ name: '', email: '', message: '', botField: '' })
const submitState = ref<'idle' | 'sending' | 'success' | 'error'>('idle')

function encodeFormData(payload: Record<string, string>) {
  return Object.entries(payload).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&')
}

async function handleSubmit() {
  submitState.value = 'sending'
  try {
    await $fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeFormData({ 'form-name': 'contact', 'bot-field': form.botField, name: form.name, email: form.email, message: form.message }),
    })
    submitState.value = 'success'
    form.name = ''; form.email = ''; form.message = ''; form.botField = ''
  } catch {
    submitState.value = 'error'
  }
}
</script>
