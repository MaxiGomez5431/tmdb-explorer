import { useNavigate } from 'react-router';

export default function MediaScrollImg({ ImageUrl, title, id, mediaType }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/${mediaType}/${id}`);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${ImageUrl})`,
      }}
      className="flex justify-center items-center posterSize my-1 mr-2 bg-cover relative rounded shadow-normal hover:-translate-y-1 duration-100"
      alt={title}
      onClick={() => {handleClick(id)}}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-100 bg-black/70 flex justify-center items-center rounded">
        <i className="fa-solid fa-circle-play text-white text-5xl" />
      </div>
    </div>
  );
}