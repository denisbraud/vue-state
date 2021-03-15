import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CounterNoState from '../views/counter/NoState.vue'
import CounterStore from '../views/counter/Store.vue'
import CounterOvermind from '../views/counter/Overmind.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/counter/nostate',
    name: 'CounterNoState',
    component: CounterNoState
  },
  {
    path: '/counter/store',
    name: 'CounterStore',
    component: CounterStore
  },
  {
    path: '/counter/overmind',
    name: 'CounterOvermind',
    component: CounterOvermind
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
