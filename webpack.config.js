const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

let nodeModules = {}

fs
	.readdirSync('node_modules')
	.filter(function(x) {
		return ['.bin'].indexOf(x) === -1
	})
	.forEach(function(mod) {
		nodeModules[mod] = 'commonjs ' + mod
	})

module.exports = {
	entry: './src/index.js',
	target: 'node',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'index.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			}
		]
	},
	externals: nodeModules,
	plugins: [
		new webpack.IgnorePlugin(/\.(css|less)$/),
		new webpack.BannerPlugin({
			banner: 'require("source-map-support").install();',
			raw: true,
			entryOnly: false
		})
	],
	devtool: 'sourcemap'
}
