# Simple Webpack build system
With dev-server, output dist folder, Sass and image loading

Based on Treehouse Webpack Basics course
/**
 * From Webpack Treehouse Course
 **/
https://teamtreehouse.com/library/why-we-need-a-build-step
1. load modules
2. minify code
3. build prod code
  - module loading
  - concatination
  - minification

# build script

// package.json
```
  ...
  "scripts": {
    "build": "webpack --optimize-minimize"
  },
  ...
```

```
$ npm run build
```

# Dev Server
```
$ npm install --save-dev webpack-dev-server
```

// package.json
```
  ...
  "scripts": {
    "build": "webpack --optimize-minimize",
    "start": "webpack-dev-server"
  },
  ...
```

Start in watch mode:

```
$ npm start
```
Go to: localhost:8080

# Hookup Sass styles
1. style-loader // inject styles into JS
2. css-loader // parse CSS into injectable styles 
3. sass-loader // transpile Sass into parsible CSS

```
$ npm install --save-dev style-loader css-loader sass-loader
```

// webpack-config.js
```
    ...
		loaders: [
			{
				loader: "babel-loader",
				test: /\.js$/
			}, {
				// chain pipe loaders
				loaders: ["style-loader", "css-loader", "sass-loader"],
				test: /\.scss$/
			}
		]
```

// index.js
```
import './styles.scss';
```

# Image and URL loaders
```
$ npm install --save-dev img-loader url-loader
```

// webpack.config.js
Add another loader object
```
    ...
    }, {
        loaders: ["url-loader", "img-loader"],
        test: /\.png$/
    }
    ...
```

