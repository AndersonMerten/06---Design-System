import { fontWeights } from "@ignite-ui/tokens";
import { Meta } from "@storybook/react";
import { TokensGrid } from "../../components/TokensGrid";

const meta: Meta = {
  title: "Tokens/Font-Weights",
};

export default meta;

export const Documentation = () => {
  return (
    <div>
      <div style={{ color: "#FFFFFF" }}>
        <h1>Peso das fontes no Ignite.</h1>

        <TokensGrid tokens={fontWeights} />
      </div>
    </div>
  );
};

Documentation.storyName = "Font-Weights";
