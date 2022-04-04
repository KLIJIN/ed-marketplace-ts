import { HTMLAttributes, ReactNode } from "react";

export interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}
