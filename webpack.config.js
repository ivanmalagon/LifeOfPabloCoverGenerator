module.exports = {
    entry: "./src/entry.js",
    output: {
        path: __dirname + "/output",
        filename: "bundle.js"
    },
    module: {
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
          { test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/ }
        ]
    }
};