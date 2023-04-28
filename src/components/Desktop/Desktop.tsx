import React, { useEffect, useRef, useState, Ref } from "react";
import style from "./Desktop.module.css";
import SelectArea from "../SelectArea/SelectArea";

const Desktop = () => {
  const wrapperRef = useRef(null);

  return (
    <div className={style.container} ref={wrapperRef}>
      <SelectArea parentRef={wrapperRef} />
    </div>
  );
};

export default Desktop;
