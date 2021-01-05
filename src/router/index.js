import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
import Login from '@/components/Login/Login.vue'
import Register from '@/components/Register/Register.vue'
import AuthenticationService from '@/services/AuthenticationService'
import { EventBus } from '../main';

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    beforeEnter: checkLoginStatus
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: checkLoginStatus
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: checkLoginStatus
  },
  {
    path: '/logout',
    name: 'Logout',
    beforeEnter(to, from, next) {
      checkLoginStatus(to, from, next)
      AuthenticationService.logout()
      next('/home')
    }
  }
  ]
})

function requireAuth(to, from, next) {
  checkLoginStatus(to, from, next)
  if (!AuthenticationService.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

function checkLoginStatus(to, from, next){
  EventBus.$emit('loginStatus');
  next()
}