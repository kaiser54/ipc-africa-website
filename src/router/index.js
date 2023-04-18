import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import BlogView from '../views/BlogView.vue'
import Blogpost from '../views/Blogpost.vue'
import services from '@/components/services.vue'
import jsonData from '@/../public/data.json';


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
  // {
  //   path: '/blog/:postTitle',
  //   // path: '/blog/postsss',
  //   name: 'blogPost',
  //   component: Blogpost,
  //   props: true
  // },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404page.vue')
  },
  { path: '/Page not found', component: () => import('@/views/404page.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/404' },
  {
    path: '/blog/:postTitle',
    name: 'blogPost',
    component: Blogpost,
    props: true,
    beforeEnter: (to, from, next) => {
      const postTitle = to.params.postTitle;
      const postExists = jsonData.some(post => post.postTitle === postTitle);

      if (postExists) {
        next();
      } else {
        next('/:pathMatch(.*)*');
      }
    }
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
