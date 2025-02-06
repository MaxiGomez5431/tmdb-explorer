import { useNavigate } from 'react-router';
import { useState, useEffect, useRef } from "react";

export default function MediaScrollImg({ ImageUrl, title, id, mediaType }) {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Deja de observar después de cargar la imagen
        }
      },
      { rootMargin: "100px" }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    navigate(`/${mediaType}/${id}`);
  };

  return (
    <div
      ref={divRef}
      style={{
        backgroundImage: isVisible ? `url(${ImageUrl})` : "none",
      }}
      className="flex justify-center items-center posterSize my-1 mr-4 bg-cover relative rounded shadow-normal hover:-translate-y-1 duration-100 cursor-pointer bg-gray-800"
      onClick={handleClick}
    >
      {!isVisible && (
        <div className="w-full h-full flex justify-center items-center">
          <span className="text-white text-sm">Loading...</span>
        </div>
      )}
      <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-100 bg-black/70 flex justify-center items-center rounded">
        <i className="fa-solid fa-circle-play text-white text-5xl" />
      </div>
    </div>
  );
}
