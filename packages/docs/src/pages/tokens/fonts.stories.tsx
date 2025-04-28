import { fonts } from "@aim-ignite-ui/tokens";
import { Meta } from "@storybook/react";
import { TokensGrid } from "../../components/TokensGrid";

const meta: Meta = {
  title: "Tokens/Font-Families",
};

export default meta;

export const Documentation = () => {
  return (
    <div>
      <div style={{ color: "#FFFFFF" }}>
        <h1>Tipos de fontes no Ignite.</h1>

        <TokensGrid tokens={fonts} />
      </div>
    </div>
  );
};

Documentation.storyName = "Font-Families";
