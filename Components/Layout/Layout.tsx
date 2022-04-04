import React from "react";
import classNames from "classnames";
import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import {Header} from "../Header"
import { Sidebar } from "../Sidebar"
import { Footer } from "../Footer"

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <div>
      <Sidebar />
      <div>{children}</div>
    </div>
    <Footer />
  </>
);
