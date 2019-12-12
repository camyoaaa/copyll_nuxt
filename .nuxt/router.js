import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ad09bd66 = () => interopDefault(import('..\\pages\\deploy.vue' /* webpackChunkName: "pages_deploy" */))
const _723c3400 = () => interopDefault(import('..\\pages\\deploy\\chaxun\\index.vue' /* webpackChunkName: "pages_deploy_chaxun_index" */))
const _4a27df6d = () => interopDefault(import('..\\pages\\deploy\\guaji\\index.vue' /* webpackChunkName: "pages_deploy_guaji_index" */))
const _394ddc98 = () => interopDefault(import('..\\pages\\deploy\\muban\\index.vue' /* webpackChunkName: "pages_deploy_muban_index" */))
const _8bab7050 = () => interopDefault(import('..\\pages\\deploy\\pinduoduo.vue' /* webpackChunkName: "pages_deploy_pinduoduo" */))
const _9f891c96 = () => interopDefault(import('..\\pages\\deploy\\pinduoduo\\_category.vue' /* webpackChunkName: "pages_deploy_pinduoduo__category" */))
const _5d3401fb = () => interopDefault(import('..\\pages\\deploy\\taobao.vue' /* webpackChunkName: "pages_deploy_taobao" */))
const _1d0313b2 = () => interopDefault(import('..\\pages\\deploy\\taobao\\_category.vue' /* webpackChunkName: "pages_deploy_taobao__category" */))
const _3132bc9f = () => interopDefault(import('..\\pages\\deploy\\test.vue' /* webpackChunkName: "pages_deploy_test" */))
const _1d24224c = () => interopDefault(import('..\\pages\\deploy\\douyin\\_category.vue' /* webpackChunkName: "pages_deploy_douyin__category" */))
const _11ffb9a4 = () => interopDefault(import('..\\pages\\deploy\\jingdong\\_category.vue' /* webpackChunkName: "pages_deploy_jingdong__category" */))
const _280cb624 = () => interopDefault(import('..\\pages\\download.vue' /* webpackChunkName: "pages_download" */))
const _c99acb1a = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _fa0f275a = () => interopDefault(import('..\\pages\\price.vue' /* webpackChunkName: "pages_price" */))
const _73220f48 = () => interopDefault(import('..\\pages\\regist.vue' /* webpackChunkName: "pages_regist" */))
const _5cea1148 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/deploy",
    component: _ad09bd66,
    name: "deploy",
    children: [{
      path: "chaxun",
      component: _723c3400,
      name: "deploy-chaxun"
    }, {
      path: "guaji",
      component: _4a27df6d,
      name: "deploy-guaji"
    }, {
      path: "muban",
      component: _394ddc98,
      name: "deploy-muban"
    }, {
      path: "pinduoduo",
      component: _8bab7050,
      name: "deploy-pinduoduo",
      children: [{
        path: ":category?",
        component: _9f891c96,
        name: "deploy-pinduoduo-category"
      }]
    }, {
      path: "taobao",
      component: _5d3401fb,
      name: "deploy-taobao",
      children: [{
        path: ":category?",
        component: _1d0313b2,
        name: "deploy-taobao-category"
      }]
    }, {
      path: "test",
      component: _3132bc9f,
      name: "deploy-test"
    }, {
      path: "douyin/:category?",
      component: _1d24224c,
      name: "deploy-douyin-category"
    }, {
      path: "jingdong/:category?",
      component: _11ffb9a4,
      name: "deploy-jingdong-category"
    }]
  }, {
    path: "/download",
    component: _280cb624,
    name: "download"
  }, {
    path: "/login",
    component: _c99acb1a,
    name: "login"
  }, {
    path: "/price",
    component: _fa0f275a,
    name: "price"
  }, {
    path: "/regist",
    component: _73220f48,
    name: "regist"
  }, {
    path: "/",
    component: _5cea1148,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
