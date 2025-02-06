import { useEffect, useState } from "react";
import useMobile from "../../../../hooks/useMobile";

export default function MediaScrollBtns({ scrollRef, leftStyle = "MediaScrollBtn", rightStyle = "MediaScrollBtn" }) {
  const { isMobile } = useMobile(768);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
      }
    };

    // Comprobar en el primer render
    checkScroll();

    // Agregar event listener para detectar scroll
    scrollRef.current?.addEventListener("scroll", checkScroll);

    // Cleanup: eliminar event listener cuando el componente se desmonte
    return () => {
      scrollRef.current?.removeEventListener("scroll", checkScroll);
    };
  }, [scrollRef]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -window.innerWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: window.innerWidth,
      behavior: "smooth",
    });
  };

  return (
    <>
      {!isMobile && (
        <>
          {canScrollLeft && (
            <button onClick={scrollLeft} className={`${leftStyle} left-2 absolute z-30`}>
              <i className="fa-solid fa-chevron-left text-white text-2xl" />
            </button>
          )}

          {canScrollRight && (
            <button onClick={scrollRight} className={`${rightStyle} right-2 absolute z-30`}>
              <i className="fa-solid fa-chevron-right text-white text-2xl" />
            </button>
          )}
        </>
      )}
    </>
  );
}
