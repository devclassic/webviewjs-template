import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: () => import('../views/home/Home.vue') },
    { path: '/about', component: () => import('../views/about/About.vue') },
  ],
})

export default router
