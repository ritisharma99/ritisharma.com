<template>
  <div>
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center pt-20">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div class="order-2 md:order-1">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Hello, I'm
            <span class="gradient-text block">Riti Sharma</span>
          </h1>
          <p class="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            This website is a home for the things I care about — science, creativity, engineering,
            storytelling, and the joy of learning something new every day.
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink to="/research" class="btn-primary">
              View My Work
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </NuxtLink>
            <a href="#contact" class="btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div class="order-1 md:order-2 flex justify-center">
          <div class="relative w-64 h-64 md:w-80 md:h-80 animate-float">
            <div class="absolute inset-0 rounded-full bg-gradient-brand opacity-20 blur-2xl"></div>
            <div class="relative w-full h-full rounded-full p-1 bg-gradient-brand">
              <NuxtImg
                src="/images/Riti_Sharma.png"
                alt="Riti Sharma"
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

    <!-- About Section -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="section-title text-center mb-12">About Me</h2>
        <div class="space-y-6 text-slate-300 text-lg leading-relaxed">
          <p>
            I'm a bio-mechanical engineer drawn to the puzzles hidden inside materials and living systems.
            Right now, I'm a PhD researcher at the University of Pennsylvania, using synchrotron X-ray
            nano-tomography to understand how bones resist fatigue at the nanoscale — the stuff that keeps
            our skeletons from crumbling every time we take a step.
          </p>
          <p>
            Outside the lab, I'm curious about just about everything: 3D printing scale models, road
            trips through mountain highways, learning to ride a motorbike, editing videos, and finding
            ways to tell scientific stories so they actually stick. This site is my attempt to bring all
            those worlds together.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="section-title text-center mb-12">Get In Touch</h2>
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="space-y-8">
            <p class="text-slate-400 text-lg">
              I'd love to hear from you — whether it's about research, collaborations, or just to say hello.
            </p>
            <div class="space-y-4">
              <a
                href="mailto:sharma.riti99@gmail.com"
                class="flex items-center gap-4 text-slate-300 hover:text-brand-teal transition-colors group"
              >
                <span class="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center group-hover:bg-brand-teal/20 transition-colors">
                  <svg class="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </span>
                sharma.riti99@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/riti-sharma"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-4 text-slate-300 hover:text-brand-teal transition-colors group"
              >
                <span class="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center group-hover:bg-brand-teal/20 transition-colors">
                  <svg class="w-5 h-5 text-brand-teal" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </span>
                linkedin.com/in/riti-sharma
              </a>
              <a
                href="https://github.com/ritisharma"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-4 text-slate-300 hover:text-brand-teal transition-colors group"
              >
                <span class="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center group-hover:bg-brand-teal/20 transition-colors">
                  <svg class="w-5 h-5 text-brand-teal" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </span>
                github.com/ritisharma
              </a>
            </div>
          </div>

          <!-- Contact Form -->
          <form class="glass-card p-8 space-y-6" @submit.prevent="handleSubmit">
            <div>
              <label for="name" class="block text-sm font-medium text-slate-300 mb-2">Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 bg-dark-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-slate-300 mb-2">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 bg-dark-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                class="w-full px-4 py-3 bg-dark-800/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-500 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button type="submit" class="btn-primary w-full justify-center">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Riti Sharma — Biomechanical Engineer & Researcher',
  ogTitle: 'Riti Sharma — Biomechanical Engineer & Researcher',
  description: 'PhD researcher at the University of Pennsylvania exploring nanoscale fatigue in bone using synchrotron X-ray tomography. Science, creativity, engineering, and storytelling.',
  ogDescription: 'PhD researcher at the University of Pennsylvania exploring nanoscale fatigue in bone using synchrotron X-ray tomography.',
  ogImage: '/images/og-image.png',
  twitterCard: 'summary_large_image',
})

const form = reactive({
  name: '',
  email: '',
  message: '',
})

function handleSubmit() {
  // For Netlify Forms, the form-data will be handled by Netlify
  alert('Thank you for your message! I\'ll get back to you soon.')
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>
