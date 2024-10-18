import { useEffect, useState } from "react";

const useDevice = (query) => {
  const mediaQuery = window.matchMedia(query);
  const [isMobileDevice, setIsMobileDevice] = useState(mediaQuery.matches);
  useEffect(() => {
    const handleChange = (e) => {
      if (e.matches) {
        setIsMobileDevice(true);
      } else {
        setIsMobileDevice(false);
      }
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [isMobileDevice]);

  return { isMobileDevice, setIsMobileDevice };
};

export default useDevice;
