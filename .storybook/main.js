module.exports = {
  "stories": [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-jest",
    {
      /**
       * NOTE: fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
       name: '@storybook/addon-postcss',
       options: {
         postcssLoaderOptions: {
           implementation: require('postcss'),
         },
       }      
    }
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}