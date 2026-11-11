<script setup lang="ts">
import { ref } from 'vue'
import { data, marItemsData } from '@/components/skill/skills.ts'

const skills = ref(data)
const marItems = ref(marItemsData)
</script>

<template>
  <section id="skills" class="py-28 bg-ink2">
    <div class="max-w-[1200px] mx-auto px-10">
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 mb-16">
        <div class="reveal-l">
          <span class="font-mono text-[.65rem] tracking-[.2em] uppercase text-accent block mb-3">
            03 — Stack
          </span>
          <h2
            class="font-serif font-bold text-ivory leading-[1.05] tracking-[-0.03em] mb-5"
            style="font-size: clamp(1.8rem, 3.5vw, 2.8rem)"
          >
            Mes outils, <em class="text-accent">mes armes.</em>
          </h2>
          <p class="text-[.9rem] text-muted leading-[1.8]">
            Cinq ans à utiliser, tester et affiner ma stack. Aussi à l'aise côté backend que
            frontend. Je sais quand utiliser quoi.
          </p>
        </div>

        <!-- Groups 2x2 -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 reveal">
          <div v-for="g in skills" :key="g.title">
            <div
              class="flex items-center gap-3 font-mono text-[.68rem] tracking-[.18em] uppercase text-accent mb-5"
            >
              <span class="block w-6 h-px bg-accent"></span>
              {{ g.title }}
            </div>
            <div class="flex flex-col gap-1">
              <div
                v-for="sk in g.items"
                :key="sk.name"
                class="flex justify-between items-center px-4 py-3 border border-transparent rounded transition-all duration-200 hover:bg-accent-dim hover:border-accent-line"
                data-hover
              >
                <span class="text-[.9rem] text-paper2">{{ sk.name }}</span>
                <span
                  class="font-mono text-[.65rem] tracking-[.08em] text-muted2 transition-colors group-hover:text-accent"
                >
                  {{ sk.level }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Marquee -->
      <div class="overflow-hidden border-t border-rule pt-10">
        <div class="marquee-track flex gap-10 items-center w-max">
          <template v-for="_ in 2" :key="_">
            <template v-for="(item, i) in marItems" :key="`${_}-${i}`">
              <span
                class="font-mono text-[.75rem] tracking-widest text-muted2 whitespace-nowrap transition-colors duration-200 hover:text-accent"
              >
                {{ item }}
              </span>
              <span class="text-rule text-sm">·</span>
            </template>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
