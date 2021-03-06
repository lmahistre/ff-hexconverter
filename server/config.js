const path = require('path');
const appDirName = path.resolve(__dirname+'/..');

module.exports = {
	jsSite : {
		mode: 'production',
		module: {
			rules: [
				{
					test: /\.jsx$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
					},
				},
			],
		},
		entry : appDirName+"/src/js/entry-site.js",
		output : {
			path : appDirName +'/public',
			filename : 'app.js',
		},
		optimization : {
			minimize : false,
		},
		node : false,
	},
	jsAddon : {
		mode: 'production',
		module: {
			rules: [
				{
					test: /\.jsx$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
					},
				},
			],
		},
		entry : appDirName+"/src/js/entry-addon.js",
		output : {
			path : appDirName +'/addon',
			filename : 'app.js',
		},
		node : false,
	},
	test : {
		spec_dir: 'src/tests',
		spec_files: [
			'tools.spec.js',
			'validate.spec.js',
			'converter.spec.js',
			'compute.spec.js',
		],
		helpers: [],
	},
	app : {
		port : 3007,
		name : 'Hexconverter',
		iconFormats : [32, 48, 64, 96, 128, 512],
		themeColor : '#EEE',
	},
	cssSite : {
		inputFolder : appDirName+'/src/less',
		inputFilename : 'index.less',
		outputFolder : appDirName+'/public',
		outputFilename : 'style.css',
	},
	cssAddon : {
		inputFolder : appDirName+'/src/less',
		inputFilename : 'index.less',
		outputFolder : appDirName+'/addon',
		outputFilename : 'style.css',
	},
	zipSource : {
		directories : [
			'public',
			'addon',
			'server',
			'src',
		],
		files : [
			'.gitignore',
			'.travis.yml',
			'build.js',
			'CHANGELOG.md',
			'package.json',
			'package-lock.json',
			'README.fr.md',
			'README.md',
		],
	},
};