import { HTMLAttributes, ReactNode } from "react";

export interface TagProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: "s" | "m" | "l";
  children: ReactNode;
  color?: "ghost" | "red" | "grey" | "green" | "primary";
  href?: string;
}
