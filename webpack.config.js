const path = require('path');

module.exports = {
  mode: 'production',
  entry: './source/javascripts/vj.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/javascripts'),
    publicPath: '/WebVJ/',
  },
  module: {
    rules: [
      {
        test: /\.(glsl|frag|vert)$/,
        use: ['raw-loader', 'glslify-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      threejs: path.join(__dirname, 'bower_components/threejs/build/three.min.js'),
      'dat-gui': path.join(__dirname, 'bower_components/dat-gui/build/dat.gui.min.js'),
    },
  },
};
