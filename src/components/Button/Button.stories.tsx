import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Secondary: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

Primary.args = {
  textColor: "blue",
  background: "red",
};

Secondary.args = {
  textColor: "red",
  background: "blue",
};
