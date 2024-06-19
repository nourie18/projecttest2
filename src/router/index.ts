import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobView from '../views/JobView.vue'
import JobList from '../components/JobList.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/job',
      name: 'job',
      component: JobView     
    },
    {
      path: '/job/:id',
      name: 'joblist',
      component: JobList,
      props:true     
    }

  
  ]
})

export default router
