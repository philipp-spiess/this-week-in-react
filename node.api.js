export default pluginOptions => ({
  webpack: config => {
    const oneOf = config.module.rules[0].oneOf

    oneOf.unshift(
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true,
          }
        }
      }
    )

    return config
  },
})
