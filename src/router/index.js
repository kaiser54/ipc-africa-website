import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import Blogpost from '../views/Blogpost.vue'
import services from '@/components/services.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/services',
    name: 'services',
    component: services
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  // {
  //   path: '/blogpost',
  //   name: 'Blogpost',
  //   component: Blogpost
  // },
  {
    path: '/blog/:postTitle',
    // path: '/blog/postsss',
    name: 'blogPost',
    component: Blogpost,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404page.vue')
  },
  
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: AboutView
  // }
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
  // {
  //   // path: "*",
  //   path: "/:catchAll(.*)",
  //   name: "home",
  //   component: HomeView,
  //   meta: {
  //     requiresAuth: false
  //   }
  // }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
