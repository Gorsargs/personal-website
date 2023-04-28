import React from "react";
import Image from "next/image";
import WinStartIcon from "@/assets/icons/windows-5.png";
import styles from "./WinBtn.module.css";

const WinBtn = () => {
  return (
    <button className={styles.winBtn}>
      <Image src={WinStartIcon} alt="Start" />
      <span className="font-bold">Start</span>
    </button>
  );
};

export default WinBtn;
