<template>
  <main class="relative bg-secondary flex flex-col">

    <NavComponent class="bg-fixed top-0 left-0 bottom-0" :activate="isActivate" />


    <PresentationSection class="grow ml-20"
      v-intersection-observer="[onIntersectionObserver('presentation'), { threshold: 0.55 }]" />

    <ProjectsSection class="grow ml-20 flex items-center justify-center my-10"
      v-intersection-observer="[onIntersectionObserver('projects'), { threshold: 0.3 }]" />


  </main>
</template>
<script setup>
import { vIntersectionObserver } from '@vueuse/components'
import { reactive } from 'vue'
const isActivate = reactive({
  presentation: false,
  projects: false
})
function onIntersectionObserver(section) {
  return ([{ isIntersecting }]) => {
    if (isIntersecting) {
      isActivate[section] = true;
    } else {
      isActivate[section] = false;
    }
  }
}
</script>

<style scoped></style>