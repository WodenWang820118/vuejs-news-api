import { createWebHistory, createRouter } from "vue-router"
import Home from '@/views/Home'

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
    component: () => import('@/views/About')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
