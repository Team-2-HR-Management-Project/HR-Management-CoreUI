const proxy = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    proxy('leave', {
      target: '',
      changeOrigin: true,
    }),
  )
}
