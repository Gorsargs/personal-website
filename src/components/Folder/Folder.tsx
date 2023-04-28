import React, { useRef } from "react";
import styles from "./Folder.module.css";
import classNames from "classnames";
import SelectArea from "../SelectArea/SelectArea";

const Folder = () => {
  const wrapperRef = useRef(null);
  return (
    <div className={classNames(styles.container,"window")}>
      <div className="title-bar">
        <div className="title-bar-text">A Title Bar</div>
        <div
          className={classNames("title-bar-controls", styles.titleBarControls)}
        >
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className={styles.body} ref={wrapperRef}>
        <SelectArea parentRef={wrapperRef} />
      </div>
    </div>
  );
};

export default Folder;
