export default function HeroButtons ({changeMovie, resetTimer}) {
  return (

    <div className="flex gap-4">
      <button
        className="
        text-white px-4 py-2 
        bg-gradient-to-r from-black to-black/0
        absolute left-0 top-1/2 -translate-y-1/2 
        h-full -z-10 text-2xl"
        onClick={() => {
          changeMovie(false); // Cambia a la película anterior
          resetTimer(); // Reinicia el temporizador
        }}
      >
        {"<"}
      </button>

      <button
        className="
        text-white px-4 py-2 
        bg-gradient-to-l from-black to-transparent
        absolute right-0 top-1/2 -translate-y-1/2 
        h-full -z-10 text-2xl"
        onClick={() => {
          changeMovie(true); // Cambia a la siguiente película
          resetTimer(); // Reinicia el temporizador
        }}
      >
        {">"}
      </button>
    </div>
  )
}