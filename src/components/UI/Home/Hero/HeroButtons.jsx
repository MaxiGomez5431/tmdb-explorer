import { useState } from "react";

export default function HeroButtons({ totalItems, changeMovie, setSelectedMovie }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const newIndex = (activeIndex - 1 + totalItems) % totalItems;
    setActiveIndex(newIndex);
    changeMovie(false);
    setSelectedMovie(newIndex);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const newIndex = (activeIndex + 1) % totalItems;
    setActiveIndex(newIndex);
    changeMovie(true);
    setSelectedMovie(newIndex);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const handleIndicatorClick = (index) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setSelectedMovie(index);
    setTimeout(() => setIsAnimating(false), 700);
  };

  return (
    <div className="relative w-auto my-10 flex items-center justify-center">
      <button
        className={`text-white text-2xl px-5 transition-transform ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:scale-125'}`}
        onClick={handlePrev}
        disabled={isAnimating}
      >
        ❮
      </button>

      <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
        {Array.from({ length: totalItems }).map((_, index) => (
          <span
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`m-1 w-3 h-3 rounded-full transition-colors duration-300 ${activeIndex === index ? "bg-white" : "bg-gray-500/60"}`}
          />
        ))}
      </div>

      <button
        className={`text-white text-2xl px-5 transition-transform ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:scale-125'}`}
        onClick={handleNext}
        disabled={isAnimating}
      >
        ❯
      </button>
    </div>
  );
}
