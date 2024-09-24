import styles from "./InputHelperText.module.css";
import classNames from "classnames";

export interface HelperTextProps {
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
}

const InputHelperText = ({ helperText, errorMessage, disabled }: HelperTextProps) => {
  const helperTextClass = classNames(styles.helperText, {
    [styles.errorMessage]: errorMessage,
    [styles.disabled]: disabled,
  });

  return (
    <div className={styles.helperWrapper}>
      <span className={helperTextClass}>{errorMessage ? errorMessage : helperText}</span>
    </div>
  );
};

export default InputHelperText;
