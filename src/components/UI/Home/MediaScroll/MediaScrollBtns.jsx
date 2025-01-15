export default function MediaScrollBtns ({scrollRef}) {
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -window.innerWidth / 2, // Cantidad de desplazamiento
      behavior: "smooth",
    });
  };
  
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: window.innerWidth / 2, // Cantidad de desplazamiento
      behavior: "smooth",
    });
  };
  
  return (
    <>
      <button
        onClick={scrollLeft}
        className="px-2 absolute left-0 w-auto h-60 md:h-72 bg-gradient-to-r from-black to-black/40 "
      >
        <i className="fa-solid fa-chevron-left text-white"/>
      </button>
      
      <button
        onClick={scrollRight}
        className="px-2 absolute right-0 w-auto h-60 md:h-72 bg-gradient-to-l from-black to-black/40 "
      >
        <i className="fa-solid fa-chevron-right text-white"/>
      </button>
    </>
  )
}