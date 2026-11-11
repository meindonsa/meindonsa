<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { badgeData, dataStats, type State } from '@/components/banner/BannerData.ts'
import { type SocialNetwork, socialNetworks } from '@/shared/SocialNetwork.ts'

const stats: Ref<State[]> = ref(dataStats)
const badges: Ref<string[]> = ref(badgeData)
const socials: Ref<SocialNetwork[]> = ref(socialNetworks)
</script>

<template>
  <section
    id="hero"
    class="zone-dark bg-ink text-paper min-h-screen flex flex-col justify-center pt-28 pb-0 relative overflow-hidden bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(255,184,77,.05)_0%,transparent_65%)]"
  >
    <div class="max-w-[1200px] mx-auto px-10 w-full">
      <!-- Main grid -->
      <div class="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-end pb-20">
        <!-- LEFT -->
        <div>
          <!-- Eyebrow -->
          <div class="flex items-center gap-4 mb-8">
            <span class="block w-12 h-px bg-accent"></span>
            <span class="font-mono text-[.68rem] tracking-[.18em] uppercase text-accent">
              Ingénieur Logiciel — Libreville, Gabon
            </span>
          </div>

          <!-- Name -->
          <h1
            class="font-serif font-black text-ivory leading-[.9] tracking-[-0.04em]"
            style="font-size: clamp(4rem, 10vw, 9.5rem)"
          >
            Boris<br />
            <em class="not-italic text-accent">Axel.</em>
          </h1>

          <!-- Tagline -->
          <p
            class="mt-8 text-muted leading-relaxed max-w-[520px]"
            style="font-size: clamp(0.95rem, 1.8vw, 1.15rem)"
          >
            Je conçois et développe des
            <strong class="text-paper font-medium">applications web & mobile</strong>
            de bout en bout — du backend robuste à l'interface qui donne envie de rester.
            <strong class="text-paper font-medium">Fullstack</strong>, de la base de données au
            pixel.
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-4 mt-10 items-center">
            <a
              href="#projects"
              class="inline-flex items-center gap-2 bg-accent text-ink font-mono font-medium text-[.72rem] tracking-widest uppercase px-8 py-3.5 rounded-sm no-underline transition-all duration-200 hover:bg-ivory hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(255,184,77,.2)]"
            >
              Voir mes projets
              <svg
                width="13"
                height="13"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              class="inline-flex items-center gap-2 border border-rule text-muted font-mono text-[.72rem] tracking-widest uppercase px-7 py-3.5 rounded-sm no-underline transition-all duration-200 hover:border-accent-line hover:text-accent"
            >
              Travaillons ensemble
            </a>
          </div>

          <!-- Socials -->
          <div class="flex gap-3 mt-12">
            <a
              v-for="s in socials"
              :key="s.label"
              :href="s.href"
              :title="s.label"
              target="_blank"
              class="w-10 h-10 rounded-full border border-rule flex items-center justify-center text-muted no-underline transition-all duration-200 hover:border-accent-line hover:text-accent hover:bg-accent-dim hover:-translate-y-1"
              v-html="s.icon"
            >
            </a>
          </div>
        </div>

        <!-- RIGHT — stats -->
        <div class="hidden lg:flex flex-col border-l border-rule pl-12 self-center reveal">
          <div
            v-for="(st, i) in stats"
            :key="i"
            :class="['py-7', i < stats.length - 1 ? 'border-b border-rule' : '']"
          >
            <div class="font-serif font-black text-ivory leading-none tracking-[-0.04em] text-5xl">
              {{ st.value }}<span class="text-accent">{{ st.suf }}</span>
            </div>
            <div class="font-mono text-[.65rem] tracking-[.15em] uppercase text-muted mt-1.5">
              {{ st.lbl }}
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div
        class="border-t border-rule pt-8 flex flex-wrap justify-between items-center gap-4 reveal"
      >
        <div class="flex flex-wrap gap-2">
          <span
            v-for="b in badges"
            :key="b"
            class="font-mono text-[.65rem] tracking-[.08em] bg-ink2 border border-rule text-muted px-3 py-1.5 rounded-sm transition-all duration-200 hover:border-accent-line hover:text-accent"
          >
            {{ b }}
          </span>
        </div>
        <div
          class="flex items-center gap-2 font-mono text-[.65rem] tracking-widest uppercase text-muted2"
        >
          <span>Défiler</span>
          <span class="bob inline-block">↓</span>
        </div>
      </div>
    </div>
  </section>
</template>
