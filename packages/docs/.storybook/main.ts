import type { StorybookConfig } from "@storybook/react-vite";
import { dirname, join } from "path";

const config: StorybookConfig = {
  "stories": [
    "../src/pages/**/*.stories.*",
    "../src/stories/**/*.stories.tsx"
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
  ],
  framework: getAbsolutePath("@storybook/react"),

  core: {
    builder: getAbsolutePath("@storybook/builder-vite"),
  },

  docs: {
    autodocs:true,
  },
  viteFinal: (config, {configType}) =>{
    if (configType === "PRODUCTION") {
      config.base = '05-design-system/'
  }
  return config;
}
};
export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
