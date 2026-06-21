<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

const { data } = defineProps(['data'])
const isMobile = ref(false)
const show = ref(data.show)

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

const toggle = () => {
  show.value = !show.value
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<template>
  <div class="border border-gray-700 py-5 px-3 rounded-sm cursor-pointer">
    <div class="flex items-center gap-1 w-full">
      <img :src="data.icon" class="w-10" :alt="data.name" />
      <h1 @click="toggle" class="text-2xl font-semibold" :style="{ color: data.color }">
        {{ data.name }}
      </h1>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
