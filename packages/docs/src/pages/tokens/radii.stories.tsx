import { radii } from "@aim-ignite-ui/tokens";
import { Meta } from "@storybook/react";
import { TokensGrid } from "../../components/TokensGrid";

const meta: Meta = {
  title: "Tokens/Radii",
};

export default meta;

export const Documentation = () => {
  return (
    <div>
      <div style={{ color: "#FFFFFF" }}>
        <h1>Arredondamentos no Ignite.</h1>

        <TokensGrid tokens={radii} />
      </div>
    </div>
  );
};

Documentation.storyName = "Radii";
