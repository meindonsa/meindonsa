<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { type Service, Services } from '@/components/service/Services.ts'

const services: Ref<Service[]> = ref(Services)
</script>

<template>
  <section id="services" class="py-28 bg-ink">
    <div class="max-w-[1200px] mx-auto px-10">
      <div class="mb-16">
        <span class="font-mono text-[.65rem] tracking-[.2em] uppercase text-accent block mb-3"
          >04 — Services</span
        >
        <h2
          class="font-serif font-bold text-ivory leading-[1.05] tracking-[-0.03em]"
          style="font-size: clamp(2.2rem, 5vw, 3.8rem)"
        >
          Ce que je <em class="text-accent">construis</em>
        </h2>
        <p class="mt-4 text-muted text-[.95rem] leading-relaxed max-w-md">
          De la conception à la mise en production, je prends en charge l'intégralité du cycle.
        </p>
      </div>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule rounded-lg overflow-hidden"
      >
        <div
          v-for="srv in services"
          :key="srv.title"
          class="bg-ink p-10 relative group transition-colors duration-300 hover:bg-ink2 reveal"
          data-hover
        >
          <div
            class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></div>
          <div class="font-mono text-[.65rem] tracking-[.15em] text-accent/60 mb-5">
            {{ srv.n }}
          </div>
          <div class="text-2xl mb-4">{{ srv.icon }}</div>
          <h3 class="text-[1.05rem] font-semibold text-ivory mb-3">{{ srv.title }}</h3>
          <p class="text-[.85rem] text-muted leading-[1.7]">{{ srv.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
