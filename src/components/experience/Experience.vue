<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { type Experience, experienceData } from '@/components/experience/ExperienceData.ts'
import {
  type Certification,
  certificationData,
} from '@/components/experience/CertificationData.ts'

const jobs: Ref<Experience[]> = ref(experienceData)
const certifications: Ref<Certification[]> = ref(certificationData)
</script>

<template>
  <section id="experience" class="py-28 bg-ink">
    <div class="max-w-[1200px] mx-auto px-10">
      <div class="mb-16">
        <span class="font-mono text-[.65rem] tracking-[.2em] uppercase text-accent block mb-3">
          02 — Parcours
        </span>
        <h2
          class="font-serif font-bold text-ivory leading-[1.05] tracking-[-0.03em]"
          style="font-size: clamp(2.2rem, 5vw, 3.8rem)"
        >
          Expérience <em class="text-accent">professionnelle</em>
        </h2>
      </div>

      <div>
        <div
          v-for="xp in jobs"
          :key="xp.role"
          class="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-6 sm:gap-12 py-10 border-b border-rule first:border-t first:border-rule transition-colors duration-200 hover:bg-accent/[.02] reveal"
        >
          <!-- Period -->
          <div class="font-mono text-[.72rem] tracking-widest text-muted pt-1 leading-relaxed">
            {{ xp.period }}
          </div>

          <div>
            <h3 class="font-serif text-2xl font-bold text-ivory mb-1">{{ xp.role }}</h3>
            <div class="font-mono text-[.72rem] tracking-widest uppercase text-accent mb-4">
              ·
              <a :href="xp.company.url" :title="xp.company.name" target="_blank">
                {{ xp.company.name }}
              </a>
            </div>
            <p class="text-[.9rem] text-muted leading-[1.75] mb-5">{{ xp.desc }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="t in xp.tags"
                :key="t"
                class="font-mono text-[.65rem] tracking-[.06em] border border-rule text-muted2 px-2.5 py-1 rounded-sm transition-all duration-200 hover:border-accent-line hover:text-accent"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Certifications -->
      <div class="mt-24">
        <span class="font-mono text-[.65rem] tracking-[.2em] uppercase text-accent block mb-8">
          Certifications
        </span>
        <div>
          <div
            v-for="c in certifications"
            :key="c.title"
            class="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-6 sm:gap-12 py-10 border-b border-rule first:border-t first:border-rule transition-colors duration-200 hover:bg-accent/[.02] reveal"
          >
            <!-- Period -->
            <div class="font-mono text-[.72rem] tracking-widest text-muted pt-1 leading-relaxed">
              {{ c.period }}
            </div>

            <div>
              <h3 class="font-serif text-2xl font-bold text-ivory mb-1">{{ c.title }}</h3>
              <div class="font-mono text-[.72rem] tracking-widest uppercase text-accent mb-4">
                ·
                <a :href="c.issuer.url" :title="c.issuer.name" target="_blank" rel="noopener">
                  {{ c.issuer.name }}
                </a>
                <template v-if="c.verifyUrl">
                  ·
                  <a :href="c.verifyUrl" target="_blank" rel="noopener">Vérifier le certificat</a>
                </template>
              </div>
              <p class="text-[.9rem] text-muted leading-[1.75] mb-5">{{ c.desc }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="t in c.tags"
                  :key="t"
                  class="font-mono text-[.65rem] tracking-[.06em] border border-rule text-muted2 px-2.5 py-1 rounded-sm transition-all duration-200 hover:border-accent-line hover:text-accent"
                >
                  {{ t }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
