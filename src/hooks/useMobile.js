import { useEffect, useState } from "react";

export default function useMobile (customSize) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= (customSize || 425 ))

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= (customSize || 425));
    window.addEventListener("resize", handleResize);
  },[])

  return {isMobile}
}