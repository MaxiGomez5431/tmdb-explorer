import { useEffect, useState } from "react";

export default function useReachBottom (fnToExecute) {
  const [hasReachedBottom, setHasReachedBottom] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const totalHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= totalHeight - 1) {
      if (!hasReachedBottom) {
        onReachBottom();
        setHasReachedBottom(true);
      }
    } else {
      setHasReachedBottom(false);
    }
  };

  const onReachBottom = () => {
    fnToExecute()
    console.log("Función ejecutada al final del scroll");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasReachedBottom]);

}