import { Meta } from "@storybook/react";

const meta: Meta = {
  title: "Home",
  // parameters: {
  //   previewTabs: {
  //     "storybook/docs/panel": { hidden: true },
  //   },
  //   viewMode: "canvas",
  // },
};

export default meta;

export const Documentation = () => {
  return (
    <div>
      <div style={{ color: "#FFFFFF" }}>
        <h1>Ignite-UI</h1>
        <p>Design System do Ignite.</p>
      </div>
    </div>
  );
};

Documentation.storyName = "Home";
