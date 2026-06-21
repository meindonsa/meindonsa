<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const stuck = ref(false)
const mob = ref(false)
const links = [
  { href: '#about', label: 'À propos' },
  { href: '#experience', label: 'Parcours' },
  { href: '#skills', label: 'Stack' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projets' },
]
function onScroll() {
  stuck.value = window.scrollY > 50
}
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-400',
      stuck ? 'bg-ink/90 backdrop-blur-xl border-b border-rule' : 'border-b border-transparent',
    ]"
    style="padding: 1.5rem 0"
  >
    <div class="max-w-[1200px] mx-auto px-10 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="font-serif text-xl font-bold text-ivory tracking-tight no-underline">
        Boris Axel
        <sup class="font-mono text-[.58rem] text-gold tracking-widest font-normal align-super ml-1">
          Fullstack
        </sup>
      </a>

      <!-- Links desktop -->
      <ul class="hidden md:flex gap-10 list-none">
        <li v-for="l in links" :key="l.href">
          <a
            :href="l.href"
            class="font-mono text-[.7rem] tracking-widest uppercase text-muted no-underline transition-colors duration-200 hover:text-paper"
          >
            {{ l.label }}
          </a>
        </li>
      </ul>

      <!-- Right -->
      <div class="hidden md:flex items-center gap-4">
        <div class="flex items-center gap-2 font-mono text-[.68rem] tracking-widest text-ok">
          <span class="w-1.5 h-1.5 rounded-full bg-ok blink"></span>
          Disponible
        </div>
        <a
          href="#contact"
          class="font-mono text-[.68rem] tracking-widest uppercase bg-gold text-ink px-5 py-2 rounded-sm no-underline transition-all duration-200 hover:bg-ivory hover:-translate-y-px"
        >
          Me contacter
        </a>
      </div>

      <!-- Hamburger -->
      <button class="md:hidden flex flex-col gap-1.5" @click="mob = !mob" aria-label="Menu">
        <span
          :class="[
            'block w-6 h-px bg-paper transition-all duration-300',
            mob ? 'rotate-45 translate-y-[7px]' : '',
          ]"
        ></span>
        <span
          :class="['block w-6 h-px bg-paper transition-all duration-300', mob ? 'opacity-0' : '']"
        ></span>
        <span
          :class="[
            'block w-6 h-px bg-paper transition-all duration-300',
            mob ? '-rotate-45 -translate-y-[7px]' : '',
          ]"
        ></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mob"
      class="md:hidden fixed inset-0 bg-ink z-40 flex flex-col items-center justify-center gap-10"
    >
      <a
        v-for="l in links"
        :key="l.href"
        :href="l.href"
        @click="mob = false"
        class="font-serif text-4xl italic text-paper no-underline hover:text-gold transition-colors"
      >
        {{ l.label }}
      </a>
    </div>
  </header>
</template>
