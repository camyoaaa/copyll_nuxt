import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _61c276fe = () => interopDefault(import('..\\pages\\deploy.vue' /* webpackChunkName: "pages_deploy" */))
const _0e761768 = () => interopDefault(import('..\\pages\\deploy\\chaxun\\index.vue' /* webpackChunkName: "pages_deploy_chaxun_index" */))
const _4bc3d7a1 = () => interopDefault(import('..\\pages\\deploy\\guaji\\index.vue' /* webpackChunkName: "pages_deploy_guaji_index" */))
const _3ae9d4cc = () => interopDefault(import('..\\pages\\deploy\\muban\\index.vue' /* webpackChunkName: "pages_deploy_muban_index" */))
const _6d085c24 = () => interopDefault(import('..\\pages\\deploy\\pinduoduo.vue' /* webpackChunkName: "pages_deploy_pinduoduo" */))
const _5045f5e9 = () => interopDefault(import('..\\pages\\deploy\\pinduoduo\\_category.vue' /* webpackChunkName: "pages_deploy_pinduoduo__category" */))
const _3f299da2 = () => interopDefault(import('..\\pages\\deploy\\taobao.vue' /* webpackChunkName: "pages_deploy_taobao" */))
const _6ede1bfe = () => interopDefault(import('..\\pages\\deploy\\taobao\\_category.vue' /* webpackChunkName: "pages_deploy_taobao__category" */))
const _6eff2a98 = () => interopDefault(import('..\\pages\\deploy\\douyin\\_category.vue' /* webpackChunkName: "pages_deploy_douyin__category" */))
const _5939def0 = () => interopDefault(import('..\\pages\\deploy\\jingdong\\_category.vue' /* webpackChunkName: "pages_deploy_jingdong__category" */))
const _37414b22 = () => interopDefault(import('..\\pages\\download.vue' /* webpackChunkName: "pages_download" */))
const _74987e82 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _a50cdac2 = () => interopDefault(import('..\\pages\\price.vue' /* webpackChunkName: "pages_price" */))
const _27dac8e0 = () => interopDefault(import('..\\pages\\regist.vue' /* webpackChunkName: "pages_regist" */))
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
    component: _61c276fe,
    name: "deploy",
    children: [{
      path: "chaxun",
      component: _0e761768,
      name: "deploy-chaxun"
    }, {
      path: "guaji",
      component: _4bc3d7a1,
      name: "deploy-guaji"
    }, {
      path: "muban",
      component: _3ae9d4cc,
      name: "deploy-muban"
    }, {
      path: "pinduoduo",
      component: _6d085c24,
      name: "deploy-pinduoduo",
      children: [{
        path: ":category?",
        component: _5045f5e9,
        name: "deploy-pinduoduo-category"
      }]
    }, {
      path: "taobao",
      component: _3f299da2,
      name: "deploy-taobao",
      children: [{
        path: ":category?",
        component: _6ede1bfe,
        name: "deploy-taobao-category"
      }]
    }, {
      path: "douyin/:category?",
      component: _6eff2a98,
      name: "deploy-douyin-category"
    }, {
      path: "jingdong/:category?",
      component: _5939def0,
      name: "deploy-jingdong-category"
    }]
  }, {
    path: "/download",
    component: _37414b22,
    name: "download"
  }, {
    path: "/login",
    component: _74987e82,
    name: "login"
  }, {
    path: "/price",
    component: _a50cdac2,
    name: "price"
  }, {
    path: "/regist",
    component: _27dac8e0,
    name: "regist"
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
