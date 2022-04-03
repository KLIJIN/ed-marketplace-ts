import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface BubuttonProps extends React.ComponentProps<"button"> {
  children: ReactNode;
  appearance: "primary" | "secondary";
  arrow?: "right" | "down";
}
