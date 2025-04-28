import { Text, TextProps } from "@aim-ignite-ui/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    size: "md",
    children: (
      <>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea porro
          laboriosam, veritatis mollitia harum similique perspiciatis dolorem
          nemo ab dolore sint officiis rerum est illum quia odit, tenetur dolor
          nisi.
        </span>
      </>
    ),
  },
  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],

      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
