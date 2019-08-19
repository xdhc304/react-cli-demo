const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { 
    target: 'http://localhost:8080',
    changeOrigin: true,
    pathRewrite: {
      "^/api": "/api"
    }
  }))
  // app.use(proxy('/api/v1', { 
  //   target: 'https://post-storage-api-ms.juejin.im',
  //   changeOrigin: true,
  //   pathRewrite: {
  //     "^/api": "/"
  //   }
  // }))
}