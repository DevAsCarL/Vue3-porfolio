import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProjectStore = defineStore('projects', () => {
  const projectId = ref(null)
  return { projectId }
})
