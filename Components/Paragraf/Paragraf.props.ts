import { HTMLAttributes, ReactNode } from "react";

export interface ParagrafProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: "s" | "m" | "l";
  children: ReactNode;
}
