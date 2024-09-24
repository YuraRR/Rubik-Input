import type { Meta, StoryObj } from "@storybook/react";
import InputContainer from "./InputContainer";
import Search from "../../icons/Search";
import Help from "../../icons/Help";
import Shortkey from "../../icons/Shortkey";
import Info from "../../icons/Info";

const meta: Meta<typeof InputContainer> = {
  component: InputContainer,
  tags: ["autodocs"],
  argTypes: {
    iconBefore: { control: "boolean" },
    iconAfter: { control: "boolean" },
    infoIcon: { control: "boolean" },
    shortkey: { control: "boolean" },
  },
  render: (args) => (
    <InputContainer
      {...args}
      iconBefore={args.iconBefore && <Search />}
      iconAfter={args.iconAfter && <Help />}
      infoIcon={args.infoIcon && <Info />}
      shortkey={args.shortkey && <Shortkey />}
    />
  ),
};
export default meta;

type Story = StoryObj<typeof InputContainer>;

export const Default: Story = {
  args: {
    placeholder: "Enter your name",
    labelText: "Name",
  },
};
export const WithError: Story = {
  args: {
    state: "error",
    placeholder: "Enter your password",
    labelText: "Password",
    errorMessage: "Password is wrong",
    iconAfter: true,
    necessity: "required",
    asterisk: true,
  },
};
export const Disabled: Story = {
  args: {
    state: "disabled",
    placeholder: "Input is disabled",
    labelText: "Disabled Input",
    quiet: true,
  },
};
export const Focused: Story = {
  args: {
    state: "focus",
    placeholder: "Focus on me",
    labelText: "Focused Input",
    variants: "outline",
    infoIcon: true,
    tooltipText: "This input focused",
  },
};
export const DarkMode: Story = {
  args: {
    placeholder: "Dark mode input",
    labelText: "Dark Mode Input",
    darkMode: true,
    labelSize: 36,
    state: "default",
  },
};
export const ErrorFocus: Story = {
  args: {
    state: "error-focus",
    placeholder: "Enter a value",
    labelText: "Input with Error",
    errorMessage: "Value is incorrect",
    tooltipText: "This input is mandatory",
    asterisk: true,
    infoIcon: true,
  },
};
export const WithIcons: Story = {
  args: {
    placeholder: "Search here",
    labelText: "Search",
    iconBefore: true,
    iconAfter: true,
    shortkey: true,
  },
};
export const LargeInput: Story = {
  args: {
    inputSize: 48,
    placeholder: "Enter your address",
    labelText: "Address",
    state: "default",
  },
};

export const LeftLabelPosition: Story = {
  args: {
    placeholder: "Label on the left",
    labelText: "I'm on the left",
    labelPosition: "left",
    infoIcon: true,
    tooltipText: "The label is actually on the left",
  },
};
export const WithHelperText: Story = {
  args: {
    placeholder: "Enter your phone number",
    labelText: "Phone Number",
    helperText: "Format: +123-456-7890",
  },
};
export const QuietMode: Story = {
  args: {
    placeholder: "Enter text quietly",
    labelText: "Minimal Input",
    quiet: true,
  },
};
