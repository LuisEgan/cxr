import { useState, useEffect } from "react";
import { isMobile as isMobileView } from "react-device-detect";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(isMobileView);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 700);

    const updateIsMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener("resize", updateIsMobile);

    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  return isMobile;
};
