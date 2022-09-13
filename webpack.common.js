const path = require("path")

module.exports = {
  entry: {
    'index': "./scripts/index.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
	   {
        test: /\.(sass|css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "postcss-loader",
          },
          'sass-loader',
        ]
      },
{
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        // More information here https://webpack.js.org/guides/asset-modules/
        type: "asset",
      },
	  {
		test: /\.(jpe?g|gif|png)$/i,
		use: [
		{
		  loader: 'url-loader',
		  options: {
			limit: 10000
		  }
		}
	  ]
	},
	
    ]
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "assets")
  }
}