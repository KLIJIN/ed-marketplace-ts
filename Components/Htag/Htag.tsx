import React from "react";
import { HtagProps } from "./Htag.props";
import styles from "./Htag.module.css";

export const Htag = ({ tag, children }: HtagProps) => {
  const Heading = `h${tag}` as keyof JSX.IntrinsicElements;

  return <Heading className={styles.h1}>{children}</Heading>;
};
