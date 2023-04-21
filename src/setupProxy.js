const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
    createProxyMiddleware('/api1', {
      target: 'http://localhost:5000',
      changeOrigin: true,
      pathRewrite: { '^/api1': '' },
    }),
    //api2是需要转发的请求(所有带有/api2前缀的请求都会转发给5001)
    createProxyMiddleware('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: { '^/api2': '' },
    })
  )
}