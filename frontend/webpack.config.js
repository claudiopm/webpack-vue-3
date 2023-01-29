//Dependencias de desenvolvimento
const path = require('path');

//
const { VueLoaderPlugin } = require('vue-loader');

//separa todos os arquivos css em arquivos separados
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//
module.exports = {
    entry: './src/main.js',
    output: {
        path: process.env.NODE_ENV == 'development' ? __dirname : path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "main.css"
        })
    ],
    resolve: {
        extensions: ['.js', '.json', '.vue'],
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
                //npm i css-loader -D
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader"
                ]


            }
        ]
    }

}
// no final dessa estrutura gerar o compilador
//> npm i @vue/compiler-sfc -D

// rodar a aplicacao
//> npm -i vue
//> npm run dev