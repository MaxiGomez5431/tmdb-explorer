export default function MediaScrollBtns({ scrollRef }) {

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
      <button
        onClick={scrollLeft}
        className={`MediaScrollBtn left-2 active:translate-y-1`}
      >
        <i className="fa-solid fa-chevron-left text-white text-2xl" />
      </button>

      <button
        onClick={scrollRight}
        className={`MediaScrollBtn right-2 active:translate-y-1`}
      >
        <i className="fa-solid fa-chevron-right text-white text-2xl" />
      </button>
    </>
  );
}