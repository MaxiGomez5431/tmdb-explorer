import { useNavigate } from 'react-router';
import { API_ENDPOINTS } from '../../assets/apiConfig';

export default function Backdrop({ ImageUrl, title, id}) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div
      className={`flex justify-center items-center aspectBackdrop m-2 relative`}
      alt={title}
      onClick={() => {handleClick(id)}}
    >

      <img 
        src={`${API_ENDPOINTS.IMAGE_BACKDROP_SMALL}${ImageUrl}`}
        alt={`Backdrop image of ${title} id: ${id}`}
        className="w-full h-auto rounded-lg"
      />

      <div className="absolute w-full h-full flex flex-col justify-end items-left rounded-lg bg-black/20 p-3">
        <h3 className='text-xl uppercase md:text-2xl text-white'>{title}</h3>
      </div>

      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black/50 flex justify-center items-center rounded-lg">
        <i className="fa-solid fa-circle-play text-white text-5xl" />
      </div>
    </div>
  );
}