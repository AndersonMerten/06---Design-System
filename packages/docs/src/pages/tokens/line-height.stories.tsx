import { lineHeights } from "@ignite-ui/tokens";
import { Meta } from "@storybook/react";
import { TokensGrid } from "../../components/TokensGrid";

const meta: Meta = {
  title: "Tokens/Line-Heights",
};

export default meta;

export const Documentation = () => {
  return (
    <div>
      <div style={{ color: "#FFFFFF" }}>
        <h1>Altura da linha no Ignite.</h1>

        <TokensGrid tokens={lineHeights} />
      </div>
    </div>
  );
};

Documentation.storyName = "Line-Heights";
