import styles from "./InputHelperText.module.css";
import classNames from "classnames";

export interface HelperTextProps {
  helperText?: string;
  errorMessage?: string;
  state?: "default" | "focus" | "error" | "error-focus" | "disabled";
}

const InputHelperText = ({ helperText, errorMessage, state }: HelperTextProps) => {
  const helperTextClass = classNames(styles.helperText, {
    [styles.errorMessage]: errorMessage,
    [styles.disabled]: state == "disabled",
  });

  return (
    <div className={styles.helperWrapper}>
      <span className={helperTextClass}>{errorMessage ? errorMessage : helperText}</span>
    </div>
  );
};

export default InputHelperText;
