import styles from "./InputContainer.module.css";
import InputField from "../InputField/InputField";
import InputLabel from "../InputLabel/InputLabel";
import InputHelperText from "../InputHelperText/InputHelperText";
import classNames from "classnames";
import "../../index.css";

import { InputFieldProps } from "../InputField/InputField";
import { LabelProps } from "../InputLabel/InputLabel";
import { HelperTextProps } from "../InputHelperText/InputHelperText";

interface InputProps extends InputFieldProps, LabelProps, HelperTextProps {
  darkMode?: boolean;
}

const InputContainer = ({
  state = "default",
  inputId,
  inputSize = 36,
  quiet = false,
  variants = "fill",
  iconBefore = null,
  iconAfter = null,
  shortkey = null,
  infoIcon = null,
  placeholder = "Input...",
  alignment = "left",
  labelPosition = "top",
  labelText = "Label",
  labelSize,
  helperText,
  necessity,
  asterisk,
  tooltipText,
  errorMessage,
  darkMode,
}: InputProps) => {
  const inputContainerClass = classNames(styles.inputContainer, styles[`size-${inputSize}`], {
    [styles.positionLeft]: labelPosition == "left",
    ["dark-mode"]: darkMode,
  });

  return (
    <div className={inputContainerClass}>
      <InputLabel {...{ inputId, labelSize, labelText, necessity, infoIcon, asterisk, tooltipText, state }} />
      <div>
        <InputField
          {...{
            inputId,
            inputSize,
            state,
            quiet,
            variants,
            iconBefore,
            iconAfter,
            shortkey,
            placeholder,
            alignment,
            necessity,
          }}
        />
        <InputHelperText {...{ helperText, errorMessage }} />
      </div>
    </div>
  );
};

export default InputContainer;
