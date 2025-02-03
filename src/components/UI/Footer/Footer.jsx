export default function Footer () {
  return (
    <footer className="bg-gray-800 text-white containerPadding py-8 mt-5">
      <div className="flex justify-between items-center ">
        <div>
          <p>Gracias por visitar 💖 © 2025 Maximiliano T. Gomez</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com" className="hover:text-gray-400">Github</a>
          <a href="https://portafolio.com" className="hover:text-gray-400">Portafolio</a>
          <a href="https://linkedin.com" className="hover:text-gray-400">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}