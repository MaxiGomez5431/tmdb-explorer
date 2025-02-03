import useMobile from "../../../../hooks/useMobile"

export default function MediaScrollBtns({ scrollRef, leftStyle = "MediaScrollBtn", rightStyle = "MediaScrollBtn", animation}) {
  const { isMobile } = useMobile(768)

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -window.innerWidth / 2,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: window.innerWidth / 2,
      behavior: "smooth",
    });
  };

  return (
    <>
      {
        !isMobile &&

        <>
          <button
            onClick={scrollLeft}
            className={`${leftStyle} left-2 absolute z-30`}
          >
            <i className={`fa-solid fa-chevron-left text-white text-2xl`} />
          </button>

          <button
            onClick={scrollRight}
            className={`${rightStyle} right-2 absolute z-30`}
          >
            <i className={`fa-solid fa-chevron-right text-white text-2xl`} />
          </button>

        </>
      }
    </>

  );
}