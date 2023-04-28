import React, { useEffect, useRef } from "react";
import styles from "./SelectArea.module.css";

const SelectArea = ({
  parentRef,
}: {
  parentRef: React.RefObject<HTMLDivElement>;
}) => {
  const refWrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const selectAreaRef = refWrapper.current;

    const startP = { x: 0, y: 0 };
    const endP = { x: 0, y: 0 };
    let clickPressed = false;
    let parentFocused = false;

    const parentCurrent = parentRef.current;

    const isPressedInParent = () => {
      return clickPressed && parentFocused && parentRef.current;
    };

    const handleMouseDown = (e: MouseEvent) => {
      clickPressed = true;
      parentFocused = e.target === parentRef.current;
      if (isPressedInParent()) {
        startP.x = e.clientX;
        startP.y = e.clientY;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isPressedInParent()) {
        endP.x = e.clientX;
        endP.y = e.clientY;
        handleSelectAreaResize();
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      startP.x = 0;
      startP.y = 0;
      endP.x = 0;
      endP.y = 0;
      clickPressed = false;
      setSizeSelectArea({ left: 0, top: 0, width: 0, height: 0 });
    };

    const handleSelectAreaResize = () => {
      let left = Math.min(startP.x, endP.x);
      let top = Math.min(startP.y, endP.y);
      let right = Math.max(startP.x, endP.x);
      let bottom = Math.max(startP.y, endP.y);

      if (parentCurrent) {
        const bounds = parentCurrent.getBoundingClientRect();

        left = Math.max(bounds.left, left);
        top = Math.max(bounds.top, top);
        right = Math.min(bounds.right, right);
        bottom = Math.min(bounds.bottom, bottom);
      }

      const width = right - left;
      const height = bottom - top;
      setSizeSelectArea({ width, height, left, top });
    };

    type Sizes = {
      [key in "left" | "top" | "width" | "height"]: number;
    };

    const setSizeSelectArea = (sizes: Sizes) => {
      if (selectAreaRef) {
        selectAreaRef.style.width = sizes.width + "px";
        selectAreaRef.style.height = sizes.height + "px";
        selectAreaRef.style.left = sizes.left + "px";
        selectAreaRef.style.top = sizes.top + "px";
      }
    };

    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className={styles.container} ref={refWrapper} />;
};

SelectArea.displayName = "SelectArea";

export default SelectArea;
