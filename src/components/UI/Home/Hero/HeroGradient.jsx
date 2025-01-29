export default function HeroGradient () {
  return (
    <div className="w-full absolute z-10 min-h-[10%] bg-gradient-to-t from-TMDB-950 flex justify-center items-center "> 
      <a 
        className="circularBtn flex justify-center items-center active:translate-y-1"
        href="#first"
      >
        <i className="fa-solid fa-arrow-down text-white text-2xl"/>
      </a>  
    </div>
  )
}