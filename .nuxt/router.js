import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _61c276fe = () => interopDefault(import('..\\pages\\deploy.vue' /* webpackChunkName: "pages_deploy" */))
const _5446ace1 = () => interopDefault(import('..\\pages\\deploy\\index.vue' /* webpackChunkName: "pages_deploy_index" */))
const _0e761768 = () => interopDefault(import('..\\pages\\deploy\\chaxun\\index.vue' /* webpackChunkName: "pages_deploy_chaxun_index" */))
const _2d49ac0d = () => interopDefault(import('..\\pages\\deploy\\douyin\\index.vue' /* webpackChunkName: "pages_deploy_douyin_index" */))
const _4bc3d7a1 = () => interopDefault(import('..\\pages\\deploy\\guaji\\index.vue' /* webpackChunkName: "pages_deploy_guaji_index" */))
const _6cfc4c65 = () => interopDefault(import('..\\pages\\deploy\\jingdong\\index.vue' /* webpackChunkName: "pages_deploy_jingdong_index" */))
const _3ae9d4cc = () => interopDefault(import('..\\pages\\deploy\\muban\\index.vue' /* webpackChunkName: "pages_deploy_muban_index" */))
const _6d085c24 = () => interopDefault(import('..\\pages\\deploy\\pinduoduo.vue' /* webpackChunkName: "pages_deploy_pinduoduo" */))
const _37d67044 = () => interopDefault(import('..\\pages\\deploy\\pinduoduo\\index.vue' /* webpackChunkName: "pages_deploy_pinduoduo_index" */))
const _5045f5e9 = () => interopDefault(import('..\\pages\\deploy\\pinduoduo\\_category.vue' /* webpackChunkName: "pages_deploy_pinduoduo__category" */))
const _3f299da2 = () => interopDefault(import('..\\pages\\deploy\\taobao.vue' /* webpackChunkName: "pages_deploy_taobao" */))
const _0f754073 = () => interopDefault(import('..\\pages\\deploy\\taobao\\index.vue' /* webpackChunkName: "pages_deploy_taobao_index" */))
const _6ede1bfe = () => interopDefault(import('..\\pages\\deploy\\taobao\\_category.vue' /* webpackChunkName: "pages_deploy_taobao__category" */))
const _b1d7ae5a = () => interopDefault(import('..\\pages\\deploy\\test.vue' /* webpackChunkName: "pages_deploy_test" */))
const _01e38952 = () => interopDefault(import('..\\pages\\deploy\\chaxun\\_category.vue' /* webpackChunkName: "pages_deploy_chaxun__category" */))
const _6eff2a98 = () => interopDefault(import('..\\pages\\deploy\\douyin\\_category.vue' /* webpackChunkName: "pages_deploy_douyin__category" */))
const _26916c2c = () => interopDefault(import('..\\pages\\deploy\\guaji\\_category.vue' /* webpackChunkName: "pages_deploy_guaji__category" */))
const _5939def0 = () => interopDefault(import('..\\pages\\deploy\\jingdong\\_category.vue' /* webpackChunkName: "pages_deploy_jingdong__category" */))
const _2a624852 = () => interopDefault(import('..\\pages\\deploy\\muban\\_category.vue' /* webpackChunkName: "pages_deploy_muban__category" */))
const _49a93dfa = () => interopDefault(import('..\\pages\\price\\index.vue' /* webpackChunkName: "pages_price_index" */))
const _50976871 = () => interopDefault(import('..\\pages\\price\\test.vue' /* webpackChunkName: "pages_price_test" */))
const _7e7abaf1 = () => interopDefault(import('..\\pages\\price\\test\\index.vue' /* webpackChunkName: "pages_price_test_index" */))
const _76880e4a = () => interopDefault(import('..\\pages\\price\\test\\_testtype.vue' /* webpackChunkName: "pages_price_test__testtype" */))
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
    children: [{
      path: "",
      component: _5446ace1,
      name: "deploy"
    }, {
      path: "chaxun",
      component: _0e761768,
      name: "deploy-chaxun"
    }, {
      path: "douyin",
      component: _2d49ac0d,
      name: "deploy-douyin"
    }, {
      path: "guaji",
      component: _4bc3d7a1,
      name: "deploy-guaji"
    }, {
      path: "jingdong",
      component: _6cfc4c65,
      name: "deploy-jingdong"
    }, {
      path: "muban",
      component: _3ae9d4cc,
      name: "deploy-muban"
    }, {
      path: "pinduoduo",
      component: _6d085c24,
      children: [{
        path: "",
        component: _37d67044,
        name: "deploy-pinduoduo"
      }, {
        path: ":category",
        component: _5045f5e9,
        name: "deploy-pinduoduo-category"
      }]
    }, {
      path: "taobao",
      component: _3f299da2,
      children: [{
        path: "",
        component: _0f754073,
        name: "deploy-taobao"
      }, {
        path: ":category",
        component: _6ede1bfe,
        name: "deploy-taobao-category"
      }]
    }, {
      path: "test",
      component: _b1d7ae5a,
      name: "deploy-test"
    }, {
      path: "chaxun/:category",
      component: _01e38952,
      name: "deploy-chaxun-category"
    }, {
      path: "douyin/:category",
      component: _6eff2a98,
      name: "deploy-douyin-category"
    }, {
      path: "guaji/:category",
      component: _26916c2c,
      name: "deploy-guaji-category"
    }, {
      path: "jingdong/:category",
      component: _5939def0,
      name: "deploy-jingdong-category"
    }, {
      path: "muban/:category",
      component: _2a624852,
      name: "deploy-muban-category"
    }]
  }, {
    path: "/price",
    component: _49a93dfa,
    name: "price"
  }, {
    path: "/price/test",
    component: _50976871,
    children: [{
      path: "",
      component: _7e7abaf1,
      name: "price-test"
    }, {
      path: ":testtype",
      component: _76880e4a,
      name: "price-test-testtype"
    }]
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
