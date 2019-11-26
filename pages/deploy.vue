<template>
  <a-locale-provider :locale="zhCN">
    <div>
      <!-- 加载图标开始 -->
      <div id="wrapper" style="height:100%">
        <top-header />
        <!-- 主内容区开始 -->
        <div class="page-container" style="height:100%">
          <sider-bar />
          <!-- 页面切换内容区 -->
          <div
            id="page-wrapper"
            class="scroll-full"
            style="height:calc(100% - 65px)"
          >
            <div class="scroll-full">
              <nuxt-child></nuxt-child>
            </div>
          </div>
        </div>
      </div>
      <div class="page-footer">
        <!-- <h1>footer</h1> -->
        <page-footer />
      </div>
    </div>
  </a-locale-provider>
</template>

<script>
import '@/assets/deploy/pluginsInit.js';
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import pageConfig from "@/assets/deploy/pageConfig.js";
import topHeader from "@/components/deployComponents/topHeader";
import siderBar from "@/components/deployComponents/siderBar";
import pageFooter from "@/components/deployComponents/pageFooter";
// console.log('pageConfig',pageConfig);
export default {
  components: { topHeader, siderBar, pageFooter },
  head() {
    return {
      bodyAttrs: {
        class: ["app-pc"]
      },
      title:
        "猎流网店推广软件-淘宝引流_免费流量提升_店铺商品收藏加购_达人粉丝_手机无线APP买流量",
      meta: [
        {
          hid: "viewport1",
          name: "viewport",
          content: "initial-scale=1, maximum-scale=1, user-scalable=no"
        },
        {
          hid: "keywords1",
          name: "keywords",
          content:
            "淘宝引流,商品收藏,店铺收藏,收藏加购,达人粉丝,淘宝买流量,淘宝手机流量,淘宝流量软件,淘宝流量提升,网店推广软件"
        },
          // {
          //   name: 'apple-mobile-web-app-capable',
          //   content: 'yes'
          // }, ,
          // {
          //   name: 'apple-mobile-web-app-status-bar-style',
          //   content: 'black'
          // },
          // {
          //   name: 'renderer',
          //   content: 'webkit'
          // }, {
          //   name: 'full-screen',
          //   content: 'yes'
          // }, {
          //   name: 'browsermode',
          //   content: 'application'
          // },
          // {
          //   name: 'x5-fullscreen',
          //   content: 'true'
          // },
          // {
          //   name: 'x5-page-mode',
          //   content: 'app'
          // },
        {
          hid: "description1",
          name: "description",
          content:
            "猎流是一款提升淘宝/京东/拼多多店铺流量、店铺收藏、商品加购的引流软件，真实人工搜索，访客遍布全国各地，可深度浏览货比三家，支持提升PC端、手淘无线APP流量，快速提升淘宝店铺权重，优化商品宝贝排名人气。"
        }
        //   {
        //     name: 'author',
        //     content: 'keduoda.com'
        //   },
        //   {
        //     'http-equiv': "Access-Control-Allow-Origin",
        //     content: "*"
        //   }, {
        //     'http-equiv': "Access-Control-Allow-Origin",
        //     content: "*"
        //   }
      ],
      link: [
        {
          rel: "shortcut icon",
          href: "//mapp.alicdn.com/1511439261624KZqmvC8fhQJouw2.png",
          type: "image/png"
        },
        {
          rel: "shortcut icon",
          href: "/favicon.ico"
        },
        {
          rel: "apple-touch-icon-precomposed",
          sizes: "114x114",
          href: "//mapp.alicdn.com/15114392408051l4iMWEGVOrF9S2.png"
        },
        {
          rel: "stylesheet",
          href: "/deploy/awesome.min.css"
        },
        {
          rel: "stylesheet",
          href: "/deploy/bootstrap.css"
        },
        {
          rel: "stylesheet",
          href: "/deploy/animate.min.css"
        },
        {
          rel: "stylesheet",
          href: "/deploy/font_250416_xrr6wv8ab8.css"
        },
        {
          rel: "stylesheet",
          href: "/deploy/app.css"
        },
      ],
      noscript: [
        {
          innerHTML: "This website requires JavaScript."
        }
      ]
    };
  },
  asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error
  }) {
    
  },
  data() {
    return {
      zhCN
    };
  }
};
</script>
<style>
body {
  font-size: 13px;
  background-color: #f5f5f5;
}
.cursor-pointer {
  cursor: pointer;
}
a {
  color: #777777;
}
a {
  color: #777777;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #ff6600;
  text-decoration: none;
}
a:focus {
  outline: thin dotted #333;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.ant-input {
  border-radius: 0px;
}
.el-input {
  border-radius: 0px;
}
.el-input-group__append,
.el-input-group__prepend,
.el-input__inner {
  border-radius: 0px !important;
}
.el-button--default {
  background-color: #eee;
}
.el-button--default:hover {
  background-color: #dbdbdb;
  border-color: #c6c6c6;
}
</style>
