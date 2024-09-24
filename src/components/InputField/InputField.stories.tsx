import { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";
import Search from "../../icons/Search";
import Help from "../../icons/Help";
import Shortkey from "../../icons/Shortkey";

const meta: Meta<typeof InputField> = {
  component: InputField,
  tags: ["autodocs"],
  argTypes: {
    iconBefore: { control: "boolean" },
    iconAfter: { control: "boolean" },
    shortkey: { control: "boolean" },
  },

  render: (args) => (
    <InputField
      {...args}
      iconBefore={args.iconBefore && <Search />}
      iconAfter={args.iconAfter && <Help />}
      shortkey={args.shortkey && <Shortkey />}
    />
  ),
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    placeholder: "Enter your name",
    state: "default",
    inputSize: 36,
  },
};

export const RightAligned: Story = {
  args: {
    alignment: "right",
    placeholder: "Right-aligned text",
  },
};
export const ErrorState: Story = {
  args: {
    placeholder: "Enter your password",
    state: "error",
    inputSize: 36,
  },
};
export const Focused: Story = {
  args: {
    placeholder: "Focused input",
    state: "focus",
    inputSize: 40,
  },
};
export const Disabled: Story = {
  args: {
    placeholder: "Input is disabled",
    state: "disabled",
    inputSize: 36,
  },
};
export const WithIconBefore: Story = {
  args: {
    placeholder: "Search...",
    iconBefore: <Search />,
    state: "default",
    inputSize: 36,
  },
};
export const WithIconAfter: Story = {
  args: {
    placeholder: "Help...",
    iconAfter: <Help />,
    state: "default",
    inputSize: 36,
  },
};
export const WithIconsBeforeAndAfter: Story = {
  args: {
    placeholder: "Search with help...",
    iconBefore: <Search />,
    iconAfter: <Help />,
    inputSize: 36,
  },
};
export const WithShortkey: Story = {
  args: {
    placeholder: "Input with shortkey",
    shortkey: <Shortkey />,
    state: "default",
    inputSize: 36,
  },
};
