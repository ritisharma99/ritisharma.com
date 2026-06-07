<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-950/85 backdrop-blur transition-all duration-200"
    :class="scrolled ? 'shadow-sm border-b border-slate-200 dark:border-slate-800' : 'border-b border-slate-100 dark:border-slate-900'"
  >
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-18">
      <!-- Logo -->
      <NuxtLink to="/" class="text-xl md:text-2xl font-bold gradient-text hover:opacity-80 transition-opacity">
        Riti Sharma
      </NuxtLink>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-6">
        <ul class="flex items-center gap-8">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="text-slate-600 dark:text-slate-300 hover:text-brand-teal transition-colors text-sm font-medium tracking-wide"
              active-class="text-brand-teal"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>

        <button
          class="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-200 hover:border-teal-400/50 hover:text-brand-teal transition-colors"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleColorMode"
        >
          <span class="text-base" aria-hidden="true">{{ isDark ? '☀️' : '🌙' }}</span>
          <span>{{ isDark ? 'Light' : 'Dark' }}</span>
        </button>
      </div>

      <div class="md:hidden flex items-center gap-2">
        <button
          class="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900 h-10 w-10 text-base text-slate-600 dark:text-slate-200 hover:border-teal-400/50 hover:text-brand-teal transition-colors"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleColorMode"
        >
          <span aria-hidden="true">{{ isDark ? '☀️' : '🌙' }}</span>
        </button>

        <!-- Mobile Hamburger -->
        <button
          class="flex flex-col gap-1.5 p-2"
          @click="mobileOpen = !mobileOpen"
          aria-label="Toggle navigation"
        >
          <span
            class="block w-6 h-0.5 bg-slate-700 dark:bg-slate-200 transition-all duration-300"
            :class="{ 'rotate-45 translate-y-2': mobileOpen }"
          />
          <span
            class="block w-6 h-0.5 bg-slate-700 dark:bg-slate-200 transition-all duration-300"
            :class="{ 'opacity-0': mobileOpen }"
          />
          <span
            class="block w-6 h-0.5 bg-slate-700 dark:bg-slate-200 transition-all duration-300"
            :class="{ '-rotate-45 -translate-y-2': mobileOpen }"
          />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="md:hidden bg-white/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-800 backdrop-blur">
        <ul class="flex flex-col px-6 py-4 gap-1">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="block py-3 text-slate-600 dark:text-slate-300 hover:text-brand-teal transition-colors text-sm font-medium"
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
const colorMode = useColorMode()

const navLinks = [
  { to: '/#beyond-the-lab', label: 'Beyond the Lab' },
  { to: '/#contact', label: 'Contact' },
]

const isDark = computed(() => colorMode.value === 'dark')

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

function toggleColorMode() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}

const route = useRoute()
watch(() => route.fullPath, () => {
  mobileOpen.value = false
})
</script>
