import { createWebHistory, createRouter } from "vue-router"
import Home from '@/views/Home'

const routes = [
  {
    path: "/",
    name: "home",
    props: true,
    component: Home
  },
  {
    path: "/NewsDetails/:id",
    name: "NewsDetails",
    props: true,
    component: () => import('@/views/NewsDetails')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
