const path = require('path');
const webpack = require("webpack")
const HtmlPlugin = require("html-webpack-plugin")
module.exports={
  mode:"development",
  entry:{
    index:"./src/index.js"
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:"[name].js",
    publicPath:"http://localhost:8088/"
  },
  module:{
    rules:[
        {
            test:/\.css$/,
            use:ExtractTextPlugin.extrac({
                fallback:"style-loader",
                use:"css-loader"
            })
        },
        {
            test:/\.(png|jpg|gif)/,
            use:[{
                loader:"url-loader",
                options:{
                    limit:50000000000,
                    outputPath:"images/"
                }
            }]
        },
        {
            test:/\.(htm|html)$/i,
            loader:"html-withimg-loader"
        }
    ]
  },
  plugins:[
    new webpack.HashedModuleIdsPlugin(),
    new HtmlPlugin({
        minify:{
            removeAttributeQuotes:true,
            collapseWhitespace: true
        },
        hash:true,
        template:"./src/index.js"
    }),
    new ExtractTextPlugin("./css/main.css"),
  ],
  devServer:{
    contentBase:path.resolve(__dirname,"dist"),
    host:"localhost",
    compress:true,
    port:"8088",
    hot:true
  }
}