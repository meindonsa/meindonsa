<script setup lang="ts">
import { ref } from 'vue'
import { contactSocialNetworks, Email, LinkedIn } from '@/shared/SocialNetwork.ts'

const socials = ref(contactSocialNetworks)
</script>

<template>
  <section
    id="contact"
    class="zone-dark py-28 bg-ink text-center bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(255,184,77,.07)_0%,transparent_70%)]"
  >
    <div class="max-w-[1200px] mx-auto px-10">
      <span class="font-mono text-[.65rem] tracking-[.2em] uppercase text-accent block mb-6">
        06 — Contact
      </span>
      <h2
        class="font-serif font-black text-ivory leading-[.95] tracking-[-0.04em] mx-auto mb-5"
        style="font-size: clamp(3rem, 8vw, 7.5rem); max-width: 800px"
      >
        Construisons<br /><em class="text-accent">ensemble.</em>
      </h2>
      <p class="text-muted text-[1rem] leading-relaxed max-w-[420px] mx-auto mb-12">
        Un projet en tête ? Une mission freelance ? Ou juste envie de discuter tech ? Je réponds
        sous 24h.
      </p>

      <div class="flex justify-center gap-4 flex-wrap mb-14">
        <a
          :href="Email.href"
          class="inline-flex items-center gap-2 bg-accent text-ink font-mono font-medium text-[.72rem] tracking-widest uppercase px-8 py-3.5 rounded-sm no-underline transition-all duration-200 hover:bg-ivory hover:text-ink hover:-translate-y-0.5"
        >
          Envoyer un email
          <svg
            width="13"
            height="13"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            viewBox="0 0 24 24"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-10 7L2 7" />
          </svg>
        </a>
        <a
          :href="LinkedIn.href"
          target="_blank"
          class="border border-rule text-muted font-mono text-[.72rem] tracking-widest uppercase px-7 py-3.5 rounded-sm no-underline transition-all duration-200 hover:border-accent-line hover:text-accent"
        >
          LinkedIn →
        </a>
      </div>

      <!-- Networks -->
      <div class="flex flex-wrap justify-center gap-3">
        <a
          v-for="n in socials"
          :key="n.label"
          :href="n.href"
          target="_blank"
          class="flex items-center gap-2 bg-ink2 border border-rule rounded px-5 py-2.5 font-mono text-[.68rem] tracking-[.08em] text-muted no-underline transition-all duration-200 hover:border-accent-line hover:text-accent hover:bg-accent-dim hover:-translate-y-0.5"
          data-hover
        >
          <span v-html="n.icon" class="w-3.5 h-3.5 shrink-0"></span>
          {{ n.label }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
