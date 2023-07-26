const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
	mode: isDevelopment ? 'development' : 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'main.js',
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		compress: true,
		port: 8080,
		open: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.css$/,
				use: [
					isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'images',
						},
					},
				],
			},
			{
				test: /\.scss$/,
				use: [
					isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.svg$/,
				use: 'svg-url-loader',
			},
			{
				test: /\.webp$/,
				use: 'file-loader',
			},
			{
				test: /\.bmp$/,
				use: 'url-loader',
			},
		],
	},

	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin(),
			new HtmlWebpackPlugin({
				template: './public/index.html',
			}),

			new MiniCssExtractPlugin({
				filename: isDevelopment ? '[name].css' : '[name].[contenthash].css',
			}),
		],
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'public/sitemap.xml', to: 'sitemap.xml' },
				{ from: 'public/robots.txt', to: 'robots.txt' },
			],
		}),
	],
};
