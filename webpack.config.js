var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require('path');

var webpackConfig = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				test: /\.js$/
			}, {
				// chain pipe loaders
				loaders: ["style-loader", "css-loader", "sass-loader"],
				test: /\.scss$/
			}, {
				loaders: ["url-loader", "img-loader"],
				test: /\.png$/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.ejs"
		})
	]
};

module.exports = webpackConfig;