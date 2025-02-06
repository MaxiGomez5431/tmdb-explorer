export default function Footer () {
  return (
    <footer className="bg-gradient-to-t from-TMDB-900 text-white containerPadding py-8 mt-5">
      <div className="flex justify-between items-center pt-5">
        <div>
          <p>Gracias por visitar 💖 © 2025 Maximiliano T. Gomez</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/MaxiGomez5431" target="_blank" className="hover:text-TMDB-500">Github</a>
          <a href="https://portfolio-maxigomez5431s-projects.vercel.app/" target="_blank" className="hover:text-TMDB-500">Portafolio</a>
          <a href="https://www.linkedin.com/in/maximiliano-t-gomez/" target="_blank" className="hover:text-TMDB-500">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}