import React from "react";
import { Button } from "./Button";

export default {
  title: "Component/Button",
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: "Yellow", value: "#FFE5B9" },
        { name: "Orange", value: "#F5A962" },
        { name: "Grey", value: "#EEEEEE" },
      ],
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  label: "Primary",
  size: "medium",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  label: "Secondary",
  size: "medium",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  label: "Success",
  size: "medium",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  label: "Danger",
  size: "medium",
};
