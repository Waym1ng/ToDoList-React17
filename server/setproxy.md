## React 脚手架配置代理
### 方法一：
在 package.json 文件中进行配置：

`"proxy": "http://localhost:5000"`

- 优点：配置简单，前端请求资源可不加前缀
- 缺点：不能配置多个代理
- 工作方式：当请求了 3000 端口号（本机）不存在的资源时，就会把请求转发给 5000 端口号服务器
### 方法二：
在 src 目录下创建代理配置文件 setupProxy.js ，进行配置
```
const {createProxyMiddleware} = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    //api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
    createProxyMiddleware('/api1', {
      //配置转发目标地址(能返回数据的服务器地址)
      target: 'http://localhost:5000',
      //控制服务器接收到的请求头中host字段的值
      /*
      changeOrigin设置为true时，服务器收到的请求头中的host为：localhost:5000
      changeOrigin设置为false时，服务器收到的请求头中的host为：localhost:3000
      changeOrigin默认值为false，但一般将changeOrigin改为true
      */
      changeOrigin: true,
      //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
      pathRewrite: { '^/api1': '' },
    }),
    createProxyMiddleware('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: { '^/api2': '' },
    })
  )
}
```