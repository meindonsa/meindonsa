<script setup lang="ts">
const details = [
  { k: 'Localisation', v: 'Libreville, Gabon 🇬🇦 · Remote OK' },
  { k: 'Formation', v: 'Ingénierie Logiciel' },
  { k: 'Spécialité', v: 'Développement Fullstack Web, Mobile & Desktop' },
  { k: 'Langues', v: 'Français · Anglais' },
  { k: 'Disponibilité', v: '✓ Disponible — Freelance', ok: true },
]
const cards = [
  {
    icon: '⚡',
    title: 'Développement Backend',
    body: "APIs robustes, bases de données bien conçues, logique métier solide avec Spring Boot. J'ai l'outil adapté.",
  },
  {
    icon: '🎨',
    title: 'Développement Frontend',
    body: "Interfaces réactives, accessibles et performantes. Vue 3, Angular, animations soignées. Autant d'attention au pixel qu'à l'algorithme.",
  },
  {
    icon: '📱',
    title: 'Mobile & Cross-platform',
    body: "Applications iOS & Android avec IONIC. Une codebase, deux plateformes, zéro compromis sur l'expérience.",
  },
  {
    icon: '🖥',
    title: 'Desktop & Cross-platform',
    body: 'Applications pour vos bureaux : Windows, Mac ou Linux. Plusieurs platefomes, une codebase robuste, un outils. ElectronJs.',
  },
]
</script>

<template>
  <section id="about" class="py-28 bg-ink2">
    <div class="max-w-[1200px] mx-auto px-10">
      <!-- Header -->
      <div class="mb-16">
        <span class="font-mono text-[.65rem] tracking-[.2em] uppercase text-accent block mb-3"
          >01 — À propos</span
        >
        <h2
          class="font-serif font-bold text-ivory leading-[1.05] tracking-[-0.03em]"
          style="font-size: clamp(2.2rem, 5vw, 3.8rem)"
        >
          Du code qui <em class="text-accent">résout</em><br />de vrais problèmes.
        </h2>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-20 items-start">
        <!-- Left — text -->
        <div class="reveal-l">
          <p class="text-[1.1rem] text-paper2 leading-[1.85] mb-5">
            Je suis <strong class="text-ivory font-medium">Boris Axel</strong>, ingénieur logiciel
            basé à Libreville, Gabon. Fullstack dans l'âme, j'interviens aussi bien sur des
            architectures backend robustes que sur des interfaces frontend soignées.
          </p>
          <p class="text-muted leading-[1.85] mb-5">
            Mon parcours couvre des projets variés : APIs REST, applications SPA, systèmes
            d'authentification, intégrations de paiement, dashboards analytiques, applications
            mobiles IONIC.
          </p>
          <p class="text-muted leading-[1.85]">
            Je crois que le bon code est celui qui
            <strong class="text-paper font-medium">dure et qui scale</strong> — pas seulement celui
            qui marche le premier jour. Architecture claire, tests : j'aborde chaque projet comme si
            je ne devais le maintenir que dans 3 ans.
          </p>

          <!-- Detail rows -->
          <dl class="mt-10">
            <div
              v-for="d in details"
              :key="d.k"
              class="flex justify-between items-center py-4 border-b border-rule first:border-t first:border-rule"
            >
              <dt class="font-mono text-[.7rem] tracking-[.12em] uppercase text-muted2">
                {{ d.k }}
              </dt>
              <dd :class="['text-[.9rem] text-right', d.ok ? 'text-ok' : 'text-paper']">
                {{ d.v }}
              </dd>
            </div>
          </dl>
        </div>

        <!-- Right — cards -->
        <div class="flex flex-col gap-4 reveal lg:sticky lg:top-28">
          <div
            v-for="c in cards"
            :key="c.title"
            class="bg-ink border border-rule rounded-md p-7 transition-colors duration-300 hover:border-accent-line"
            data-hover
          >
            <div class="text-2xl mb-4">{{ c.icon }}</div>
            <div class="text-[.92rem] font-semibold text-ivory mb-2">{{ c.title }}</div>
            <div class="text-[.85rem] text-muted leading-relaxed">{{ c.body }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
