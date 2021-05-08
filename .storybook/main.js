module.exports = {
  stories: [
    // Paths to the story files
    "../components/*.stories.mdx",
    "../components/*.stories.js",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "storybook-dark-mode",
    "@storybook/addon-contexts/register",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(s)css$/,
      use: [
        "style-loader",
        "css-loader",
        "postcss-loader",
        "sass-loader",
      ],
    })

    return config
  },
};
