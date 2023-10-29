const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        proxy('/api1', { // 遇见api1前缀的请求，就会出发该代理配置
            target: 'http://localhost:5000',    //请求转发给谁
            changeOrigin: true, // 控制服务器收到的响应头中Host字段的值，Host字段标识请求从哪里发出
            pathRewrite: {'^/api1':''}  // 重写请求路径
        }),
        proxy('/api2', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {'^/api2':''}
        })
    )
}

