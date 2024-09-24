import { Meta, StoryObj } from "@storybook/react";
import InputLabel from "./InputLabel";
import Info from "../../icons/Info";

const meta: Meta<typeof InputLabel> = {
  component: InputLabel,
  tags: ["autodocs"],
  argTypes: {
    infoIcon: { control: "boolean" },
  },
  render: (args) => <InputLabel {...args} infoIcon={args.infoIcon && <Info />} />,
};

export default meta;

type Story = StoryObj<typeof InputLabel>;

export const Default: Story = {
  args: {
    labelText: "Default Label",
    labelSize: 36,
  },
};
export const RequiredLabel: Story = {
  args: {
    labelText: "Required Label",
    labelSize: 36,
    necessity: "required",
    asterisk: true,
  },
};
export const OptionalLabel: Story = {
  args: {
    labelText: "Optional Label",
    labelSize: 36,
    necessity: "optional",
  },
};
export const LabelWithTooltip: Story = {
  args: {
    labelText: "Label with Tooltip",
    labelSize: 36,
    infoIcon: <Info />,
    tooltipText: "This is label",
  },
};
export const CustomSizeLabel: Story = {
  args: {
    labelText: "Custom Size Label",
    labelSize: 40,
  },
};
