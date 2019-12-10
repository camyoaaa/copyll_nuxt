module.exports = {
  /*
   ** Headers of the page
   */
  server: {
    port: 3000
  },
  head: {
    title: "vue_nuxt",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Nuxt.js project"
      }
    ],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }],
    noscript: [{
      innerHTML: "This website requires JavaScript."
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: "#3B8070"
  },
  /*
   ** Build configuration
   */
  plugins: ["~/plugins/axios-config.js"], //全局axios配置
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],
  axios: {
    proxy: true,
    prefix: "/api",
    credentials: true
  },
  proxy: {
    "/api": {
      target: "http://192.168.3.94:9527", //这个网站是开源的可以请求到数据的
      changeOrigin: true,
      pathRewrite: {
        "^/api": "/"
      }
    }
  },
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
