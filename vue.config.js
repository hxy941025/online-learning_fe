const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    lintOnSave: false,
    devServer: {
        /* 自动打开浏览器 */
        open: false,
        port: 8080,
        /* 使用代理 */
        proxy: {
            '/api': {
                /* 目标代理服务器地址 */
                target: "http://yike.home.xuxusheng.com:88",
                /* 允许跨域 */
                changeOrigin: true,
                //当请求以/api请求开头时，会被重定向成后面的
                // pathRewrite: {
                //     '^/api': ''
                // }
            },
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('src'),
                '@c': resolve('src/components'),
                'views': resolve('src/views'),
                'api': resolve('src/api')
            }
        }
    },
};