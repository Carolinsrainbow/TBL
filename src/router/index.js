import Vue from 'vue'
import VueRouter from 'vue-router'
import Crud from '../views/Crud.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "Login",
    component: Login
  },
  {
    path: '/Crud',
    name: 'Crud',
    component: Crud
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
