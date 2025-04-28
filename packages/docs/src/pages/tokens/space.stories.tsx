import { space } from "@aim-ignite-ui/tokens";
import { Meta } from "@storybook/react";
import { TokensGrid } from "../../components/TokensGrid";

const meta: Meta = {
  title: "Tokens/Spaces",
};

export default meta;

export const Documentation = () => {
  return (
    <div>
      <div style={{ color: "#FFFFFF" }}>
        <h1>Espaçamentos do Ignite.</h1>

        <TokensGrid tokens={space} hasRemValue />
      </div>
    </div>
  );
};

Documentation.storyName = "Spaces";
