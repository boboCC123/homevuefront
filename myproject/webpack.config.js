const path = require('path')
const webpack  =require('webpack')
module.exports ={
  entry:'./src/main.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:"bundle.js",
    publicPath:'dist/'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        loader: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name:'img/[name].[hash:8].[ext]'
        },
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
    ],
  },
  resolve:{
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    }
  },
  plugins:[
    new webpack.BannerPlugin('最终版权归tom所有')
  ]


}
