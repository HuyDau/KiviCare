module.exports = {
  // ... các cấu hình khác
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // Tắt cảnh báo
              sourceMap: false,
              modules: false
            }
          }
        ]
      }
    ]
  },
  // Tắt cảnh báo trong console
  performance: {
    hints: false
  }
};