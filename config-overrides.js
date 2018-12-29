const workboxPlugin = require('workbox-webpack-plugin')
const path = require('path')

module.exports = {
    webpack: function (config, env) {

       if (env === "production") {
            console.log("Production build - Adding Workbox for PWAs");

            const workboxConfigProd = {
                swSrc: path.join(__dirname, 'src', 'custom-service-worker.js'),
                swDest: 'custom-service-worker.js',
                importWorkboxFrom: 'disabled'
              }
              // 删除默认的WorkboxWebpackPlugin配置
              config = removePreWorkboxWebpackPluginConfig(config)
             // 加入我们的配置
              config.plugins.push(new workboxPlugin.InjectManifest(workboxConfigProd))
       }

        return config;
    }
}


// 此函数用来找出 默认配置中的 WorkboxWebpackPlugin， 并把它删除
function removePreWorkboxWebpackPluginConfig(config) {
    const preWorkboxPluginIndex = config.plugins.findIndex((element) => {
        return Object.getPrototypeOf(element).constructor.name === 'GenerateSW'
    })
    if (preWorkboxPluginIndex !== -1) {
        config.plugins.splice(preWorkboxPluginIndex, 1)
    }
    return config
}