import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import SecurityView from "@/views/SecurityView";
import ScientistsView from "@/views/ScientistsView";
import ProductView from "@/views/ProductView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/Main',
    name: 'Main',
    component: HomeView
  },
  {
    path: '/Security',
    name: 'Security',
    component: SecurityView
  },
  {
    path: '/Scientists',
    name: 'Scientists',
    component: ScientistsView
  },
  {
    path: '/Product',
    name: 'Product',
    component: ProductView
  }
]

const router = new VueRouter({
  routes
})

export default router
