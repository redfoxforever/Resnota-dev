import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    alias: '/home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import('../views/CatalogView.vue')
  },
  {
    path: '/workers',
    name: 'workers',
    component: () => import('../views/WorkersView.vue')
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: () => import('../views/ReviewsView.vue')
  },
  {
    path: '/basket',
    name: 'basket',
    component: () => import('../views/BasketView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0);
  next()
}) 

export default router
