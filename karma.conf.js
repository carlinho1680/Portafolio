const path = require('path')

module.exports = function(config){
  config.set({
    frameworks: ['jasmine'],
    files: [
      { pattern: 'tests/**/*.spec.js', watched: false }
    ],
    preprocessors: {
      'tests/**/*.spec.js': ['webpack', 'sourcemap']
    },
    webpack: {
      mode: 'development',
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env','@babel/preset-react']
              }
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader','css-loader']
          }
        ]
      },
      resolve: {
        extensions: ['.js','.jsx']
      },
      devtool: 'inline-source-map'
    },
    reporters: ['progress','kjhtml','coverage'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity
  })
}
