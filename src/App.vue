<script setup lang="ts">
import About from './components/about/About.vue'
import Banner from './components/banner/Banner.vue'
import Experience from './components/experience/Experience.vue'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import Skills from './components/skill/Skills.vue'
import Service from '@/components/service/Service.vue'
import Contact from '@/components/contact/Contact.vue'
import Projects from '@/components/project/Projects.vue'
import { onMounted } from 'vue'

onMounted(() => {
  const dot = document.getElementById('c-dot')!
  const ring = document.getElementById('c-ring')!
  let mx = 0,
    my = 0,
    rx = 0,
    ry = 0

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX
    my = e.clientY
  })
  ;(function loop() {
    dot.style.left = mx + 'px'
    dot.style.top = my + 'px'
    rx += (mx - rx) * 0.1
    ry += (my - ry) * 0.1
    ring.style.left = rx + 'px'
    ring.style.top = ry + 'px'
    requestAnimationFrame(loop)
  })()

  document.querySelectorAll('a,button,[data-hover]').forEach((el) => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-expand'))
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-expand'))
  })
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('in'), i * 70)
          obs.unobserve(e.target)
        }
      })
    },
    { threshold: 0.1 },
  )
  document.querySelectorAll('.reveal,.reveal-l').forEach((el) => obs.observe(el))
})
</script>

<template>
  <div id="c-dot" aria-hidden="true"></div>
  <div id="c-ring" aria-hidden="true"></div>
  <div class="bg-ink font-sans text-paper min-h-screen overflow-x-hidden">
    <Navbar />
    <Banner />
    <About />
    <Experience />
    <Skills />
    <Service />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<style scoped></style>
