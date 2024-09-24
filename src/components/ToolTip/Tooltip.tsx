import { ReactNode } from "react";
import styles from "./Tooltip.module.css";

interface ToolTipProps {
  children?: ReactNode;
}

const Tooltip = ({ children }: ToolTipProps) => {
  return <span className={styles.tooltip}>{children}</span>;
};

export default Tooltip;
