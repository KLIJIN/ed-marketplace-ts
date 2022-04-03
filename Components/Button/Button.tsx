import React from "react";
import classNames from "classnames";
import styles from "./Button.module.css";
import { BubuttonProps } from "./Button.props";
import VectorR from "../../assets/VectorR.svg";

export const Button = ({
  children,
  appearance,
  arrow,
  className,
  ...props
}: BubuttonProps): JSX.Element => {
  const btnClass = classNames(className, styles.button, styles[appearance]);

  return (
    <button className={btnClass} {...props}>
      {children}
      {arrow && (
        <div>
          <VectorR
            className={classNames(styles.row, {
              [styles.rotate]: arrow === "down",
            })}
          />
        </div>
      )}
    </button>
  );
};
