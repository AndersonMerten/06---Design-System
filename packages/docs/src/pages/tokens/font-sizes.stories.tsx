import { fontSizes } from "@ignite-ui/tokens";
import { Meta } from "@storybook/react";
import { TokensGrid } from "../../components/TokensGrid";

const meta: Meta = {
  title: "Tokens/Font-Sizes",
};

export default meta;

export const Documentation = () => {
  return (
    <div>
      <div style={{ color: "#FFFFFF" }}>
        <h1>Tamanho de fontes no Ignite.</h1>

        <TokensGrid tokens={fontSizes} hasRemValue />
      </div>
    </div>
  );
};

Documentation.storyName = "Font-Sizes";
