import { useNavigate } from 'react-router';

export default function MediaScrollImg({ ImageUrl, title, id }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${ImageUrl})`,
      }}
      className="flex justify-center items-center min-w-40 md:min-w-48 min-h-60 md:min-h-72 my-1 mr-2 bg-cover relative"
      alt={title}
      onClick={() => {handleClick(id)}}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black/70 flex justify-center items-center">
        <i className="fa-solid fa-circle-play text-white text-5xl" />
      </div>
    </div>
  );
}