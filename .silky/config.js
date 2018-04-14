module.exports = {
	version: .2,
	port: 14422,
	compatibleModel: !0,
	proxy: {
		forward: {}
	},
	livereload: {
		exts: ["less", "coffee", "hbs", "html", "css", "js", "png", "jpg", "gif"]
	},
	routers: [{
		path: /^(.+)\.source(\.js)$/,
		to: "$1$2",
		next: !1
	}],
	plugins: {
		honey: {},
		"honey-preview": {
			server: "108"
		},
		autoprefix: {}
	},
	build: {
		output: "./build",
		copy: [],
		ignore: [/^temp$/,/^css[\/\\]module$/i,/^\.git$/],
		rename: [],
		compress: {
			ignore: [],
			js: !0,
			css: !0,
			html: !1,
			internal: !0
		}
	},
	compiler: {
		rules: [{
			path: /js\/.+\.js$/i,
			compiler: "babel.es6"
		}]
	}
};