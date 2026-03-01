<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-dark-800/95 backdrop-blur-lg shadow-lg shadow-black/20 border-b border-slate-700/50' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
      <!-- Logo -->
      <NuxtLink to="/" class="text-xl md:text-2xl font-bold gradient-text hover:opacity-80 transition-opacity">
        Riti Sharma
      </NuxtLink>

      <!-- Desktop Nav -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="text-slate-300 hover:text-brand-teal transition-colors text-sm font-medium tracking-wide uppercase"
            active-class="text-brand-teal"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Mobile Hamburger -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-2"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle navigation"
      >
        <span
          class="block w-6 h-0.5 bg-slate-200 transition-all duration-300"
          :class="{ 'rotate-45 translate-y-2': mobileOpen }"
        />
        <span
          class="block w-6 h-0.5 bg-slate-200 transition-all duration-300"
          :class="{ 'opacity-0': mobileOpen }"
        />
        <span
          class="block w-6 h-0.5 bg-slate-200 transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-2': mobileOpen }"
        />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="mobileOpen" class="md:hidden bg-dark-800/98 backdrop-blur-lg border-b border-slate-700/50">
        <ul class="flex flex-col px-6 py-4 gap-1">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="block py-3 text-slate-300 hover:text-brand-teal transition-colors text-sm font-medium tracking-wide uppercase"
              active-class="text-brand-teal"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const mobileOpen = ref(false)
const scrolled = ref(false)

const navLinks = [
  { to: '/work', label: 'Work' },
  { to: '/creative', label: 'Creative' },
  { to: '/#contact', label: 'Contact' },
]

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

// Close mobile menu on route change
const route = useRoute()
watch(() => route.fullPath, () => {
  mobileOpen.value = false
})
</script>
