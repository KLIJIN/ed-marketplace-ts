import React from "react";
import classNames from "classnames";
import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";

export const Tag: React.FC<TagProps> = ({
  size = "m",
  color = "ghost",
  href,
  children,
  ...props
}) => (
  <div className={`${styles.tag} ${styles[color]}  ${styles[size] }`} {...props}>
    {href ? <a href={href}>{children}</a> : <>{children}</>}
  </div>
);
