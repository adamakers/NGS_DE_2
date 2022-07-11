const path = require('path');

module.exports = {
  entry: './src/app.js',
  watch: true,
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};