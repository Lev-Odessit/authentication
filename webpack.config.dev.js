import path from 'path';
import webpack from 'webpack';

export default {
	entry: [
		'webpack-hot-middleware/client',
		path.join(__dirname, '/client/index.js'),
	],
	output: {
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.LoaderOptionsPlugin({
			options: {
				devtools: 'eval-source-map',
				context: __dirname
			}
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: [
					path.join(__dirname, 'client'),
					path.join(__dirname, 'server/shared/')
				],
				loaders: [ 'react-hot-loader', 'babel-loader' ]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
}
