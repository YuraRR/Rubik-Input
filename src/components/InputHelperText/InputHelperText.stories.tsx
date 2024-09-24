import { Meta, StoryObj } from "@storybook/react";
import InputHelperText from "./InputHelperText";

const meta: Meta<typeof InputHelperText> = {
  component: InputHelperText,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InputHelperText>;

export const Default: Story = {
  args: {
    helperText: "This is a helper text.",
    errorMessage: undefined,
  },
};
export const WithErrorMessage: Story = {
  args: {
    helperText: undefined,
    errorMessage: "This field is required.",
  },
};
export const EmptyText: Story = {
  args: {
    helperText: undefined,
    errorMessage: undefined,
  },
};
