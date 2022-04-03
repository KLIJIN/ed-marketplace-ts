import React from "react";
import classNames from "classnames";
import { ParagrafProps } from "./Paragraf.props";
import styles from "./Paragraf.module.css";

export const Paragraf = ({
  size = "m",
  children,
  ...props
}: ParagrafProps): JSX.Element => (
  <p className={`${styles.p} ${styles[size]}`} {...props}>
    {children}
  </p>
);
