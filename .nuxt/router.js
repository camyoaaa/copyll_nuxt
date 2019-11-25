import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _97845c0e = () => interopDefault(import('..\\pages\\deploy.vue' /* webpackChunkName: "pages_deploy" */))
const _5f1c0869 = () => interopDefault(import('..\\pages\\deploy\\index.vue' /* webpackChunkName: "pages_deploy_index" */))
const _766a47d4 = () => interopDefault(import('..\\pages\\deploy\\chaxun\\index.vue' /* webpackChunkName: "pages_deploy_chaxun_index" */))
const _aa2200d6 = () => interopDefault(import('..\\pages\\deploy\\douyin\\index.vue' /* webpackChunkName: "pages_deploy_douyin_index" */))
const _dc3c19ce = () => interopDefault(import('..\\pages\\deploy\\guaji\\index.vue' /* webpackChunkName: "pages_deploy_guaji_index" */))
const _169added = () => interopDefault(import('..\\pages\\deploy\\jingdong\\index.vue' /* webpackChunkName: "pages_deploy_jingdong_index" */))
const _fdf01f78 = () => interopDefault(import('..\\pages\\deploy\\muban\\index.vue' /* webpackChunkName: "pages_deploy_muban_index" */))
const _0f34b3ac = () => interopDefault(import('..\\pages\\deploy\\pinduoduo.vue' /* webpackChunkName: "pages_deploy_pinduoduo" */))
const _6e486756 = () => interopDefault(import('..\\pages\\deploy\\pinduoduo\\index.vue' /* webpackChunkName: "pages_deploy_pinduoduo_index" */))
const _502d1961 = () => interopDefault(import('..\\pages\\deploy\\pinduoduo\\_category.vue' /* webpackChunkName: "pages_deploy_pinduoduo__category" */))
const _304146a7 = () => interopDefault(import('..\\pages\\deploy\\taobao.vue' /* webpackChunkName: "pages_deploy_taobao" */))
const _e5cad80a = () => interopDefault(import('..\\pages\\deploy\\taobao\\index.vue' /* webpackChunkName: "pages_deploy_taobao_index" */))
const _2b1e6b86 = () => interopDefault(import('..\\pages\\deploy\\taobao\\_category.vue' /* webpackChunkName: "pages_deploy_taobao__category" */))
const _75e13c4b = () => interopDefault(import('..\\pages\\deploy\\test.vue' /* webpackChunkName: "pages_deploy_test" */))
const _8962ea42 = () => interopDefault(import('..\\pages\\deploy\\chaxun\\_category.vue' /* webpackChunkName: "pages_deploy_chaxun__category" */))
const _2b3f7a20 = () => interopDefault(import('..\\pages\\deploy\\douyin\\_category.vue' /* webpackChunkName: "pages_deploy_douyin__category" */))
const _9e75e8b8 = () => interopDefault(import('..\\pages\\deploy\\guaji\\_category.vue' /* webpackChunkName: "pages_deploy_guaji__category" */))
const _06a46c78 = () => interopDefault(import('..\\pages\\deploy\\jingdong\\_category.vue' /* webpackChunkName: "pages_deploy_jingdong__category" */))
const _75027b4f = () => interopDefault(import('..\\pages\\deploy\\muban\\_category.vue' /* webpackChunkName: "pages_deploy_muban__category" */))
const _5a06f627 = () => interopDefault(import('..\\pages\\price.vue' /* webpackChunkName: "pages_price" */))
const _ac0f170a = () => interopDefault(import('..\\pages\\price\\index.vue' /* webpackChunkName: "pages_price_index" */))
const _7ac3f40e = () => interopDefault(import('..\\pages\\price\\test.vue' /* webpackChunkName: "pages_price_test" */))
const _21d95469 = () => interopDefault(import('..\\pages\\price\\test\\index.vue' /* webpackChunkName: "pages_price_test_index" */))
const _a4e5a87c = () => interopDefault(import('..\\pages\\price\\test\\_testtype.vue' /* webpackChunkName: "pages_price_test__testtype" */))
const _aeccfda0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/deploy",
    component: _97845c0e,
    children: [{
      path: "",
      component: _5f1c0869,
      name: "deploy"
    }, {
      path: "chaxun",
      component: _766a47d4,
      name: "deploy-chaxun"
    }, {
      path: "douyin",
      component: _aa2200d6,
      name: "deploy-douyin"
    }, {
      path: "guaji",
      component: _dc3c19ce,
      name: "deploy-guaji"
    }, {
      path: "jingdong",
      component: _169added,
      name: "deploy-jingdong"
    }, {
      path: "muban",
      component: _fdf01f78,
      name: "deploy-muban"
    }, {
      path: "pinduoduo",
      component: _0f34b3ac,
      children: [{
        path: "",
        component: _6e486756,
        name: "deploy-pinduoduo"
      }, {
        path: ":category",
        component: _502d1961,
        name: "deploy-pinduoduo-category"
      }]
    }, {
      path: "taobao",
      component: _304146a7,
      children: [{
        path: "",
        component: _e5cad80a,
        name: "deploy-taobao"
      }, {
        path: ":category",
        component: _2b1e6b86,
        name: "deploy-taobao-category"
      }]
    }, {
      path: "test",
      component: _75e13c4b,
      name: "deploy-test"
    }, {
      path: "chaxun/:category",
      component: _8962ea42,
      name: "deploy-chaxun-category"
    }, {
      path: "douyin/:category",
      component: _2b3f7a20,
      name: "deploy-douyin-category"
    }, {
      path: "guaji/:category",
      component: _9e75e8b8,
      name: "deploy-guaji-category"
    }, {
      path: "jingdong/:category",
      component: _06a46c78,
      name: "deploy-jingdong-category"
    }, {
      path: "muban/:category",
      component: _75027b4f,
      name: "deploy-muban-category"
    }]
  }, {
    path: "/price",
    component: _5a06f627,
    children: [{
      path: "",
      component: _ac0f170a,
      name: "price"
    }, {
      path: "test",
      component: _7ac3f40e,
      children: [{
        path: "",
        component: _21d95469,
        name: "price-test"
      }, {
        path: ":testtype",
        component: _a4e5a87c,
        name: "price-test-testtype"
      }]
    }]
  }, {
    path: "/",
    component: _aeccfda0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
