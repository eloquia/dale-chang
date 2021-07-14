let plugins = [
  require('postcss-import'),
  require('tailwindcss'),
  require('autoprefixer'),
]

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        // options: {
        //   ident: 'postcss',
        //   syntax: 'postcss-scss',
        //   plugins: () => plugins
        // }
      }
    ]
  }
};
