import terminatorBig from "../../../../assets/terminator_vertical.jpg";
import terminatorSmall1 from "../../../../assets/terminator_small_1.1.jpg";
import terminatorSmall2 from "../../../../assets/terminator_small_2.1.jpg";
import { useNavigate } from 'react-router';

export default function ImageGrid() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/218`);
  };

  return (
    <div 
      className="flex flex-col items-center justify-center containerPadding my-10"
      onClick={handleClick}
    >
      
      <p className="blueTitle">
        Watch a classic
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-sm md:max-w-5xl relative cursor-pointer">
        
        <div className="col-span-2 flex">
          <img
            src={terminatorBig}
            alt="Terminator"
            className="w-auto h-[500px] sm:h-full object-contain rounded-lg neonHover tranlateYHover"
          />
        </div>

        <div className="col-span-2 flex flex-col gap-4">
          <img
            src={terminatorSmall1}
            alt="Terminator Scene 1"
            className="w-full max-h-[60%] hidden md:block object-cover rounded-lg flex-1 neonHover tranlateYHover"
          />
          <img
            src={terminatorSmall2}
            alt="Terminator Scene 2"
            className="w-full max-h-[60%] hidden md:block object-cover rounded-lg flex-1 neonHover tranlateYHover"
          />
        </div>

        <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-100 bg-black/70 flex justify-center items-center rounded">
          <i className="fa-solid fa-circle-play text-white text-5xl" />
        </div>

      </div>
    </div>
  );
}
