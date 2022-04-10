const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackDevServer = require('webpack-dev-server');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    target: 'web',
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     title: 'Reactive-sql Demo',
        //     filename: "index.html"
        // }),
        new CopyWebpackPlugin({
            patterns: [
                {from: 'node_modules/sql.js/dist/sql-wasm.wasm', to: 'sql-wasm.wasm'},
                {from: 'index.html', to: 'index.html'},
            ]
        })
    ],
    devServer: {
      host: '0.0.0.0',
      static: './dist'
    }
};