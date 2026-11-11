<script setup lang="ts">
import { Email, GitHub } from '@/shared/SocialNetwork.ts'
</script>

<template>
  <footer class="zone-dark border-t border-rule bg-ink2 py-8">
    <div class="max-w-[1200px] mx-auto px-10 flex flex-wrap justify-between items-center gap-4">
      <div class="font-serif text-[1.1rem] font-bold text-ivory">
        <a href="#hero"> Boris Axel</a>
      </div>
      <div class="font-mono text-[.65rem] tracking-widest text-muted2">
        © {{ new Date().getFullYear() }} — Ingénieur Logiciel Fullstack · Libreville, Gabon
      </div>
      <div class="flex gap-5">
        <a
          href="#hero"
          class="font-mono text-[.65rem] tracking-widest uppercase text-muted2 no-underline transition-colors hover:text-accent"
        >
          ↑ Haut
        </a>
        <a
          :href="GitHub.href"
          target="_blank"
          class="font-mono text-[.65rem] tracking-widest uppercase text-muted2 no-underline transition-colors hover:text-accent"
        >
          GitHub
        </a>
        <a
          :href="Email.href"
          class="font-mono text-[.65rem] tracking-widest uppercase text-muted2 no-underline transition-colors hover:text-accent"
        >
          Email
        </a>
      </div>
    </div>
  </footer>
</template>
