// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
const path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/", //解决build后找不到静态资源问题（代替之前的额baseUrl）,根目录路径
  outputDir: "dist",
  filenameHashing: true,
  lintOnSave: false,
  productionSourceMap: false, //打包后source文件是否生成
  devServer: {
    https: false, //是否开启协议名，如果开启会发出警告
    proxy: {
      "/api1": {
        //配置跨域的名字
        target: "http://150.158.197.106/",
        changeOrigin: true, //是否跨域
        ws: false, //是否启用websockets,
        pathRewrite: {
          "^/api1": "",
        },
      },
    },
  },
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       views: '@/views'
  //     }
  //   }
  // }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("views", "@/views");
  },
};
