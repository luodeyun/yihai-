module.exports={
    configureWebpack:{
        resolve:{
            alias:{
                assets:'@/assets',
                common:'@common',
                components:'@/components',
                views:'@/views',
                network:'@/network'
            }
        }
    },
    devServer:{
        proxy:{
            '/api':{
                target: "http://localhost:3000/",
                // 允许跨域
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                  "^/api": ""
                }
            }
        }
    }
}