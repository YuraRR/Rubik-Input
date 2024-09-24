import styles from "./InputField.module.css";
import classNames from "classnames";

import { InputHTMLAttributes, ReactNode } from "react";
import Shortkey from "../../icons/Shortkey";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  inputId: string;
  inputSize?: 24 | 32 | 36 | 40 | 44 | 48;
  state?: "default" | "focus" | "error" | "error-focus" | "disabled";
  quiet?: boolean;
  variants?: "fill" | "outline";
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
  shortkey?: ReactNode;
  placeholder?: string;
  alignment?: "left" | "right";
  necessity?: "required" | "optional" | "none";
}

const InputField = ({
  inputId,
  inputSize = 36,
  state = "default",
  quiet = false,
  variants = "fill",
  iconBefore,
  iconAfter,
  shortkey,
  placeholder = "Input...",
  alignment = "left",
  necessity,
  ...props
}: InputFieldProps) => {
  const inputClass = classNames(styles.input, styles[`size-${inputSize}`], {
    [styles.quiet]: quiet,
    [styles.fill]: variants == "fill",
    [styles.outline]: variants == "outline",
    [styles.hasIconBefore]: iconBefore,
    [styles.hasIconAfter]: iconAfter,
    [styles.hasShortkey]: shortkey,
    [styles.hasIconAfterAndShortkey]: iconAfter && shortkey,
    [styles.alignmentRight]: alignment == "right",
  });

  const wrapperClass = classNames(styles.inputWraper, styles[state], {
    [styles.quiet]: quiet,
  });

  return (
    <div className={wrapperClass}>
      {iconBefore && <span className={styles.iconBefore}>{iconBefore}</span>}
      <input
        type="text"
        placeholder={placeholder}
        className={inputClass}
        disabled={state == "disabled"}
        required={necessity == "required"}
        {...props}
      />
      <div className={styles.iconAfterAndShortkey}>
        {iconAfter && <span className={styles.iconAfter}>{iconAfter}</span>}
        {shortkey && (
          <span className={styles.shortkey}>
            <Shortkey />
          </span>
        )}
      </div>
    </div>
  );
};

export default InputField;
