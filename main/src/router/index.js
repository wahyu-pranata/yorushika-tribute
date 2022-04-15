import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Biography from '../views/Biography.vue'
import Discography from '../views/Discography.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/biography',
    name: 'Biography',
    component: Biography
  },
  {
    path: '/disco',
    name: 'Discography',
    component: Discography
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router