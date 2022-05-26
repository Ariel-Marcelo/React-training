const path = require('path'); // donde esta mi proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin'); // plugin para generar el index.html

module.exports = {
  entry: './src/index.js', // punto de entrada de nuestra aplicación
  output: {
    path: path.resolve(__dirname, 'dist'), // me encuentro en el _dirname_ y voy a la carpeta dist
    filename: 'bundle.js' // nombre del archivo empaquetado que se va a generar
  },
  resolve: {
    extensions: ['.js', '.jsx'] // extensiones que quiero que sean resueltas
  }, 
  module: {
    rules: [
      {
        test: /\.(js | jsx)$/, // busca archivos con esta extensión
        exclude: /node_modules/, // excluye archivos que esten en la carpeta node_modules
        use: {
          loader: 'babel-loader', // usa el loader de babel
        } 
      },
      {
        test: /\.html$/, // busca archivos con esta extensión
        use: [
          {
            loader: 'html-loader', // usa el loader de html
          }          
        ]
      }
    ]
  }, 
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // archivo html que se va a generar
      filename: './index.html' // nombre del archivo generado
    })
  ]
}