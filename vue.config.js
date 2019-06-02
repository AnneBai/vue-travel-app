const path = require('path');

module.exports = {
    configureWebpack: {
        devServer: {
            proxy: {
                '/api': {
                    target: 'http://localhost:8080/',
                    pathRewrite: {
                        '^/api': '/mock',
                    }
                },
            }
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
                "styles": path.resolve(__dirname, "src/assets/styles"),
                "components": path.resolve(__dirname, "src/pages/components"),
            }
        }
    }
    
}