const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',  // Вхідний файл вашого додатка
    output: {
        filename: 'bundle.js',  // Назва вихідного файлу
        path: path.resolve(__dirname, 'dist')  // Директорія виведення
    },
    module: {
        rules: [
            {
                test: /\.js$/,  // Збірка для JavaScript файлів
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/, // Обробка SCSS файлів
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',                // Парсимо CSS
                    'sass-loader'                // SCSS в CSS
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',  // це замінює file-loader
                generator: {
                    filename: 'images/[name][hash][ext][query]'
                },
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            // Налаштування оптимізації (можна налаштувати під свої потреби)
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: true,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            svgo: {
                                plugins: [
                                    {
                                        removeViewBox: false
                                    }
                                ]
                            },
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',  // Кінцевий CSS-файл
        })
    ],
    optimization: {
        minimizer: [
            `...`,
            new CssMinimizerPlugin()
        ],
    },
};
