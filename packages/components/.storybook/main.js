import { dirname, join } from "path";
module.exports = {
  stories: ["../src/**/*.stories.@(ts|tsx|js|jsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("storybook-css-modules")
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {
      viteFinal: (config) => {
        return config;
      },
    },
  },
  typescript: {
    reactDocgen: "react-docgen-typescript"
  },
  docs: {
    autodocs: false
  }
};
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
