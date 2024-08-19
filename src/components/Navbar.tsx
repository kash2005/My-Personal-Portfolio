import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    };

  return (
    <header className='fixed z-50 w-full'>
      <div className='flex justify-between items-center bg-[#001845] py-3 px-8 md:px-32'>
      <a href='#'>
        <img src="./src/assets/logo-white.png" alt='' className='w-57 h-[33] hover:scale-105 transition-all'></img>
      </a>  
      <ul className='hidden lg:flex items-center gap-9  text-base'>
        <li className='p-3 text-white hover:border-b-2 border-white cursor-pointer'><a href="#home">Home</a></li>
        <li className='p-3 text-white hover:border-b-2 border-white cursor-pointer'><a href="#about">About me</a></li>
        <li className='p-3 text-white hover:border-b-2 border-white cursor-pointer'><a href="#services">Services</a></li>
        <li className='p-3 text-white hover:border-b-2 border-white cursor-pointer'><a href="#projects">Projects</a></li>
        <li className='p-3 text-white hover:border-b-2 border-white cursor-pointer'><a href="#contact">Contact me</a></li>
      </ul>

      <FontAwesomeIcon
                        icon={isMenuOpen ? faTimes : faBars}
                        size="2x"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white cursor-pointer lg:hidden block"
      />

      <div className={`absolute lg:hidden top-14 left-0 w-full z-10 bg-[#001845] flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
        style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>
        
        <li onClick={closeMenu} className='list-none w-full text-center text-white p-4 hover:bg-white hover:text-[#001845] transition-all cursor-pointer'>
          <a href="#home">Home</a>
        </li>
        <li onClick={closeMenu} className='list-none w-full text-center text-white p-4 hover:bg-white hover:text-[#001845] transition-all cursor-pointer'>
          <a href="#about">About me</a>
        </li>
        <li onClick={closeMenu} className='list-none w-full text-center text-white p-4 hover:bg-white hover:text-[#001845] transition-all cursor-pointer'>
          <a href="#services">Services</a>
        </li>
        <li onClick={closeMenu} className='list-none w-full text-center text-white p-4 hover:bg-white hover:text-[#001845] transition-all cursor-pointer'>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={closeMenu} className='list-none w-full text-center text-white p-4 hover:bg-white hover:text-[#001845] transition-all cursor-pointer'>
          <a href="#contact">Contact me</a>
        </li>
      </div>
    </div>
    </header>
  )
}

export default Navbar;