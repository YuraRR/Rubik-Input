import { ReactNode } from "react";
import styles from "./InputLabel.module.css";
import classNames from "classnames";
import Tooltip from "../ToolTip/Tooltip";

export interface LabelProps {
  labelText?: string;
  labelSize?: 24 | 32 | 36 | 40 | 44 | 48;
  infoIcon?: ReactNode;
  labelPosition?: "top" | "left";
  necessity?: "required" | "optional" | "none";
  asterisk?: boolean;
  tooltipText?: string;
  inputId: string;
}

const InputLabel = ({
  labelText,
  labelSize = 36,
  infoIcon,
  labelPosition = "top",
  necessity = "none",
  asterisk,
  tooltipText,
  inputId,
}: LabelProps) => {
  const labelClass = classNames(styles.label, styles[`size-${labelSize}`], {
    [styles.hasinfoIcon]: infoIcon,
    [styles.positionLeft]: labelPosition == "left",
  });

  return (
    <div className={styles.labelWrapper}>
      <label htmlFor={inputId} className={labelClass}>
        <span className={styles.labelText}>
          {labelText}
          {necessity == "optional" && ` (${necessity})`}
          {necessity == "required" && (asterisk ? <span className={styles.asterisk}> *</span> : ` (${necessity})`)}
        </span>

        {infoIcon && (
          <span className={styles.infoBlock}>
            {infoIcon}
            {tooltipText && <Tooltip>{tooltipText}</Tooltip>}
          </span>
        )}
      </label>
    </div>
  );
};

export default InputLabel;
