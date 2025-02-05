export default function HeroGradient() {
  const scrollToSection = () => {
    const section = document.getElementById("first");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full absolute z-10 min-h-[10%] bg-gradient-to-t from-TMDB-950 flex justify-center items-center pt-10">
      <button 
        className="circularBtn flex justify-center items-center active:translate-y-1 animate-bounce"
        onClick={scrollToSection}
      >
        <i className="fa-solid fa-arrow-down text-white text-2xl"/>
      </button>  
    </div>
  );
}