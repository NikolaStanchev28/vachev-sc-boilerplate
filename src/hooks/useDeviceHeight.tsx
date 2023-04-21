import { useEffect, useState } from "react";

/**
 * @remarks used to fix unexpected behavior of css values 100vh on mobile devices
 * @returns device height in pixels
 * @example const deviceHeight = useDeviceHeight();
 */
export const useDeviceHeight = () => {
  const [deviceHeight, setDeviceHeight] = useState(0);

  useEffect(() => {
    const resizeHandler = () => {
      setDeviceHeight(window.innerHeight);
    };

    setDeviceHeight(window.innerHeight);

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return deviceHeight;
};
