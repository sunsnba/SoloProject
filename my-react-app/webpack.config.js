var config = {
    entry: './main.js', 
    output: {
        filename: 'index.js',
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
        query: {
            presets: ['env', 'react']
                }   
            }
        ]
    }
}

module.exports = config;