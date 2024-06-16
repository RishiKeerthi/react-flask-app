const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = {
    "mode": "development",
    "entry": "./src/index.js",
    "output": {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name]-[fullhash].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env', "@babel/preset-react"]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ],
                generator: {
                    filename: '[name]-[fullhash][ext]'
                }
            },
            {
                test: /\.(svg|ico)$/,
                use: ["svg-inline-loader"],
                generator: {
                    filename: '[name]-[fullhash][ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new WebpackManifestPlugin({
            publicPath: "/"
        })
    ]
}