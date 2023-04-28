import { useEffect, useState } from "react";

const useMouseClick = () => {
  const [isMousePressed, setIsMousePressed] = useState(false);

  useEffect(() => {
    const handleMouseDown = () => {
      setIsMousePressed(true);
    };

    const handleMouseUp = () => {
      setIsMousePressed(false);
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return isMousePressed;
};

export default useMouseClick;
