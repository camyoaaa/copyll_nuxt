module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue_nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
 plugins:[
   {src:'~/plugins/element-ui.js',ssr:false},
   {src:'~/plugins/ant-design-vue.js',ssr:false},
  //  {src:'~/plugins/deploy-layout.js',ssr:false},
   {src:'~/plugins/deploy-components.js',ssr:false},
   {src:'~/plugins/moment.js',ssr:false}
 ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
