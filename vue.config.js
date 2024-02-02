const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
    // https://github.com/WaleriiChirkov-16021990/VuePagesProject.git
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/VuePagesProject/' : '/',
}
