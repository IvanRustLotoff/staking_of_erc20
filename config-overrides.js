const webpack = require("webpack");
module.exports = function override(config, env) {
    config.resolve.fallback = {
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        assert: require.resolve("assert"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        os: require.resolve("os-browserify"),
        url: require.resolve("url"),
    };
    config.plugins.push(
        new webpack.ProvidePlugin({
            process: "process/browser",
            Buffer: ["buffer", "Buffer"],
        }),
    );
    config.module.rules.unshift({
        test: /\.m?js$/,
        resolve: {
            fullySpecified: false,
        },
    });

    return config;
};