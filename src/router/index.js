import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Criminals from '../views/Criminal.vue'
import Crime from '../views/Crime.vue'
import Officerinfo from '../views/Officerinfo.vue'
import About from '../views/About.vue'
import Report from '../views/Report.vue'
import Admin from '../views/Admin.vue'

import store from '../store/index.js'







Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: 'admin',
    name: 'admin',
    component: Admin,
    beforeEnter: (to, from, next) => {
      if (store.state.authenticated == false) {
        next("/About");
      } else {
        next();
      }
     }
    
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/criminal/:id',
    name: 'Criminals',
    component: Criminals
  },
  {
    path: '/crime/:id',
    name: 'crime',
    component: Crime
  },
  {
    path: '/crime/:id',
    name: 'report',
    component: Report
  },
  {
    path: '/officerinfo/:id',
    name: 'officerinfo',
    component: Officerinfo
  },
  
 

  {
    path: '/admin',
    name: 'Admins',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue')
  },
  {
    path: '/reporter',
    name: 'Reporter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Reporter.vue')
  },
  {
    path: '/report',
    name: 'Report',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Report.vue')
  },
  {
    path: '/criminal',
    name: 'Criminal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Criminal.vue')
  },
  {
    path: '/addcrime',
    name: 'Addcrime',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Addcrime.vue')
  },
  {
    path: '/officerinfo',
    name: 'Officerinfo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Officerinfo.vue')
  },
  {
    path: '/addcriminal',
    name: 'Addcriminal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Addcriminal.vue')
  },
  {
    path: '/task',
    name: 'Task',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Task.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
