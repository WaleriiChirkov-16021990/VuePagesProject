const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/VuePagesProject/' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  css: {
    extract: false
  },
  configureWebpack: {
    devtool: 'source-map'
  },
  chainWebpack: (config) => {
    config.externals({
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex',
      'axios': 'axios'
    })
  },
  devServer: {
    port: 8080
  }
}
