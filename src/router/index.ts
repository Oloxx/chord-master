import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TriadasView from '../views/TriadasView.vue';
import QuatriadasView from '../views/QuatriadasView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/triadas',
      name: 'triadas',
      component: TriadasView
    },
    {
      path: '/quatriadas',
      name: 'quatriadas',
      component: QuatriadasView
    }
  ]
})

export default router
