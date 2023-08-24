import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/home.vue')
// 创建 vueRouter 实例
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
  ],
})

export default router
