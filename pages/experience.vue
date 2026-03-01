<template>
  <div>
    <PageHeader title="Experience" subtitle="Research, teaching, and industry journey" />

    <div class="max-w-5xl mx-auto px-6 pb-20 space-y-16">
      <!-- Research Journey -->
      <div>
        <h2 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-lg">🔬</span>
          Research Journey
        </h2>
        <div class="space-y-6 border-l-2 border-slate-700 pl-8 ml-4">
          <ExperienceItem
            date="2022 – Present"
            title="PhD Researcher"
            org="University of Pennsylvania"
            description="Investigating nanoscale fatigue in mineralized collagen fibrils using synchrotron X-ray nano-tomography at NSLS-II, Brookhaven National Laboratory."
          />
          <ExperienceItem
            date="2021 – 2022"
            title="Research Assistant"
            org="Auckland Bioengineering Institute"
            description="Studied the impact of diabetes on cardiomyocyte energy metabolism and force dynamics using computational modeling."
          />
          <ExperienceItem
            date="2020"
            title="Research Intern"
            org="Auckland Bioengineering Institute"
            description="Developed cardiac models investigating atrial fibrillation mechanisms."
          />
        </div>
      </div>

      <!-- Teaching & Mentoring -->
      <div>
        <h2 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-lg">📚</span>
          Teaching & Mentoring
        </h2>
        <div class="space-y-6 border-l-2 border-slate-700 pl-8 ml-4">
          <ExperienceItem
            date="2024 – Present"
            title="Teaching Assistant"
            org="University of Pennsylvania"
            description="Courses: Dynamic Systems, Statics and Mechanics of Solids."
          />
          <ExperienceItem
            date="2023 – 2024"
            title="Mentor"
            org="University of Pennsylvania"
            description="Mentoring high school and undergraduate students, bridging the gap between curriculum and research."
          />
          <ExperienceItem
            date="2023 – 2024"
            title="Vice President, MEGA"
            org="University of Pennsylvania"
            description="Organized community events and professional development for graduate engineering students."
          />
        </div>
      </div>

      <!-- Internships -->
      <div>
        <h2 class="text-2xl font-bold text-white mb-8 flex items-center gap-3">
          <span class="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-lg">💼</span>
          Internships
        </h2>
        <div class="space-y-6 border-l-2 border-slate-700 pl-8 ml-4">
          <ExperienceItem
            date="2021"
            title="Patent Intern"
            org="Davies Collison Cave, New Zealand"
            description="Worked on analyzing and drafting patent documentation."
          />
          <ExperienceItem
            date="Dec 2020"
            title="Business & Strategy Intern"
            org="Mercury Energy + University of Auckland, New Zealand"
            description="Developed an electric vehicle business model at the intersection of energy and transport."
          />
          <ExperienceItem
            date="May – Jun 2019"
            title="Mechanical Engineering Intern"
            org="Honda Cars India"
            description="Focused on MUDA waste reduction processes in manufacturing."
          />
          <ExperienceItem
            date="Jun – Jul 2018"
            title="Research Intern"
            org="IIT BHU, India"
            description="Conducted computational fluid dynamics (CFD) research."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Experience — Riti Sharma',
  ogTitle: 'Experience — Riti Sharma',
  description: 'Research experience at UPenn and Auckland Bioengineering Institute, teaching assistantship, mentoring, and industry internships.',
  ogDescription: 'Research, teaching, and industry experience from India, New Zealand, and the USA.',
  ogImage: '/images/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>
