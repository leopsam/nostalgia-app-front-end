;(async () => {
  const prettierConfig = {
    plugins: [await import('prettier-plugin-tailwindcss')],
  }

  module.exports = prettierConfig
})()
