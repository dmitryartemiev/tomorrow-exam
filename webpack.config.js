const path = require('path');
const glob = require('glob');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const patternToEntries = (pattern, suffix = '') => glob
	.sync(pattern)
	.reduce((acc, val) => ({
		...acc,
		[`${path.basename(val, path.extname(val))}${suffix}`]: val,
	}), {});

module.exports = (env, argv) => ({
	entry: {
		'theme': './src/css/theme.scss',
		'app': './src/js/app.js',
		...patternToEntries('./src/js/components/*.js', '-script'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist',
		filename: './assets/[name].js',
	},
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false,
						},
					},
					'postcss-loader',
				],
			},
			{
				test: /\.(s(a|c)ss)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass'),
							sourceMap: true,
							sassOptions: {
								outputStyle: argv.mode === 'development' ? undefined : 'compressed',
							},
						},
					},
				],
			},
		],
	},
	plugins: [
		new RemoveEmptyScriptsPlugin(),
		new MiniCssExtractPlugin({
			filename: './assets/[name].css',
		}),
		new ReplaceInFileWebpackPlugin([
			{
				dir: 'dist',
				files: ['./assets/theme.css'],
				rules: [
					{
						search: /['"]{{/g,
						replace: '{{',
					},
					{
						search: /}}['"]/g,
						replace: '}}',
					},
				],
			},
		]),
		new CopyWebpackPlugin([{
				from: `**/*`,
				to: 'assets/',
				context: path.resolve(__dirname, "src", "assets"),
				flatten: true
			}]	
		)
	],
	resolve: {
		extensions: ['.scss', '.css', '.js', '.liquid'],
	},
});
