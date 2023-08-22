import { createRouter, createWebHistory } from 'vue-router'
import Porfolio from '@/views/PorfolioView.vue'
import ShowProject from '@/views/ShowProject.vue'

const routes = [
  { path: '/', component: Porfolio },
  { path: '/project/:slug', component: ShowProject, name: 'project' }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})
