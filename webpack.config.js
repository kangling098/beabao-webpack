const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000,
        host: 'localhost',
        compress: true
    },
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     loader: ['style-loader', 'css-loader'],
            //     include: path.resolve(__dirname, 'src'),
            //     exclude: /node_modules/
            // },
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader'],
            //     include: path.resolve(__dirname, 'src'),
            //     exclude: /node_modules/
            // },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader',
                    options: {
                        insertAt: 'top'
                    }
                }, 'css-loader'],
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test:/\.(png|jpg|jpeg|ttf|woff|woff2|svg|bmp|gif|eot)/,
                use:[
                    {
                        loader: 'url-loader',
                        options:{
                            limit:4096
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            minify:{
                removeAttributeQuotes: true
            },
            hash: true,
            template: path.resolve(__dirname,'./src/index.html'),
            filename:'index.html'
        })
    ]
}