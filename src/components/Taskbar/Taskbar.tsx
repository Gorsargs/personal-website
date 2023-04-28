import React from "react";
import styles from "./Taskbar.module.css";
import classNames from "classnames";
import WinBtn from "../WinBtn/WinBtn";

const Taskbar = () => {
  return <div className={styles.taskbar}>
    <WinBtn />
  </div>;
};

export default Taskbar;
