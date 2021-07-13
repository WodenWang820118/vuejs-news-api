import { createWebHistory, createRouter } from "vue-router"
import Home from '@/views/Home'

// identify the routes here, the route could have children routes
const routes = [
  {
    path: "/",
    name: "home",
    props: true,
    component: Home,
  },
  {
    path: "/About",
    name: "about",
    props: true,
    // lazy loading, routes when needed
    component: () => import('@/views/About')
  }
]

// auto-generated when creating the project using router in vue 3
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
