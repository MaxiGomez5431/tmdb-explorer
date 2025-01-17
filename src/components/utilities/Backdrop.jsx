import { useNavigate } from 'react-router';
import { API_ENDPOINTS } from '../../assets/apiConfig';

export default function Backdrop({ ImageUrl, title, id, }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${API_ENDPOINTS.IMAGE_BACKDROP_SMALL}${ImageUrl})`,
      }}
      className={`flex justify-center items-center backdropSize m-2 bg-cover relative`}
      alt={title}
      onClick={() => {handleClick(id)}}
    >

      <div className="absolute w-full h-full flex flex-col justify-end items-left bg-black/20 p-3">
        <h3 className='text-xl md:text-2xl text-white'>{title}</h3>
      </div>

      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black/50 flex justify-center items-center">
        <i className="fa-solid fa-circle-play text-white text-5xl" />
      </div>
    </div>
  );
}