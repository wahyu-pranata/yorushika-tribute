import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Biography from '../views/Biography.vue'
import Discography from '../views/Discography.vue'
import DiscoDetails from '../views/Details/Discography.vue'
import Movie from '../views/Movie.vue'

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
  },
  {
    path: '/disco/:id',
    name: 'Discography Details',
    component: DiscoDetails,
    props: true
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movie
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router