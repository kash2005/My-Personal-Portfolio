import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='flex justify-between items-center bg-[#001845] py-3 px-8 md:px-32'>
      <a href='#'>
        <img src="./src/assets/logo-white.png" alt='' className='w-57 h-[33] hover:scale-105 transition-all'></img>
      </a>  
      <ul className='hidden lg:flex items-center gap-9  text-base'>
        <li className='p-3 text-white hover:border-b-2 border-white cursor-pointer'>Home</li>
        <li className='p-3 text-white hover:border-b-2 border-white cursor-pointer'>About me</li>
        <li className='p-3 text-white hover:border-b-2 border-white cursor-pointer'>Services</li>
        <li className='p-3 text-white hover:border-b-2 border-white cursor-pointer'>Projects</li>
        <li className='p-3 text-white hover:border-b-2 border-white cursor-pointer'>Contact me</li>
      </ul>

      <FontAwesomeIcon
                        icon={isMenuOpen ? faTimes : faBars}
                        size="2x"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white cursor-pointer lg:hidden block"
      />
      <div className={`absolute lg:hidden top-14 left-0 w-full z-10 bg-[#001845] flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}

      style={{transition:"transform 0.3 ease,opacity 0.3s ease"}}
      >
        <li className='list-none w-full text-center text-white p-4 hover:bg-white hover:text-[#001845] transition-all cursor-pointer'>Home</li>
        <li className='list-none w-full text-center text-white p-4 hover:bg-white hover:text-[#001845] transition-all cursor-pointer'>About me</li>
        <li className='list-none w-full text-center text-white p-4 hover:bg-white hover:text-[#001845] transition-all cursor-pointer'>Services</li>
        <li className='list-none w-full text-center text-white p-4 hover:bg-white hover:text-[#001845] transition-all cursor-pointer'>Project</li>
        <li className='list-none w-full text-center text-white p-4 hover:bg-white hover:text-[#001845] transition-all cursor-pointer'>Contact me</li>
      </div>
    </header>
  )
}

export default Navbar;