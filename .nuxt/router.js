import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5446ace1 = () => interopDefault(import('..\\pages\\deploy\\index.vue' /* webpackChunkName: "pages_deploy_index" */))
const _49a93dfa = () => interopDefault(import('..\\pages\\price\\index.vue' /* webpackChunkName: "pages_price_index" */))
const _07e7c4b0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/deploy",
    component: _5446ace1,
    name: "deploy"
  }, {
    path: "/price",
    component: _49a93dfa,
    name: "price"
  }, {
    path: "/",
    component: _07e7c4b0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
