import { Meta, StoryFn, StoryObj } from "@storybook/react";
import InputContainer from "../InputContainer/InputContainer";
import styles from "./Playground.module.css";

import Help from "../../icons/Help";
import Search from "../../icons/Search";
import Info from "../../icons/Info";
import Shortkey from "../../icons/Shortkey";

const colorScheme = (Story: StoryFn) => {
  return (
    <div>
      <div className={styles.playground}>
        <Story />
      </div>
      <div className={styles.playgroundDark}>
        <Story darkMode={true} />
      </div>
    </div>
  );
};

const meta: Meta<typeof InputContainer> = {
  component: InputContainer,
  tags: ["autodocs"],
  decorators: [colorScheme],
  argTypes: {
    iconBefore: { control: "boolean" },
    iconAfter: { control: "boolean" },
    infoIcon: { control: "boolean" },
    shortkey: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof InputContainer>;

export const Default: Story = {
  args: {
    labelText: "Email",
    iconBefore: true,
    iconAfter: true,
    shortkey: true,
    infoIcon: true,
    helperText: "This is a hint text to help user.",
    tooltipText: "This is a hint text to help user.",
    required: false,
    disabled: false,
    inputSize: 36,
    labelPosition: "top",
  },
  render: (args, { darkMode }) => (
    <InputContainer
      {...args}
      iconBefore={args.iconBefore && <Search />}
      iconAfter={args.iconAfter && <Help />}
      infoIcon={args.infoIcon && <Info />}
      shortkey={args.shortkey && <Shortkey />}
      darkMode={darkMode}
    />
  ),
};
