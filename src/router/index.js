import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/xiao'
  },
  {
    path: '/xiao',
    name: 'xiao',
    component: () => import(/* webpackChunkName: "about" */ '../views/xiao/Xiao.vue')
  },
  {
    path: '/ming',
    name: 'ming',
    component: () => import(/* webpackChunkName: "about" */ '../views/ming/Ming.vue')
  },
  {
    path: '/kong',
    name: 'kong',
    component: () => import(/* webpackChunkName: "about" */ '../views/kong/Kong.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
