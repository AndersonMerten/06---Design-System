import { Meta } from "@storybook/react";
import { ColorsGrid } from "../../components/ColorsGrid";

const meta: Meta = {
  title: "Tokens/Colors", // Changed to match the folder structure
};

export default meta;

export const Documentation = () => {
  return (
    <div>
      <div style={{ color: "#FFFFFF" }}>
        <h1>Cores do Ignite.</h1>
      </div>
      <ColorsGrid />
    </div>
  );
};

Documentation.storyName = "Colors";
