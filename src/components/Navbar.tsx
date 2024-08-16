import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='flex justify-between items-center text-black py-3 px-8 md:px-32 bg-transparent'>
      <a href='#'>
        <img src="./src/assets/logo.png" alt='' className='w-57 h-[33] hover:scale-105 transition-all'></img>
      </a>  
      <ul className='hidden lg:flex items-center gap-9  text-base'>
        <li className='p-3 text-[#001845] hover:border-b-2 border-[#001845] cursor-pointer'>Home</li>
        <li className='p-3 text-[#001845] hover:border-b-2 border-[#001845] cursor-pointer'>About me</li>
        <li className='p-3 text-[#001845] hover:border-b-2 border-[#001845] cursor-pointer'>Services</li>
        <li className='p-3 text-[#001845] hover:border-b-2 border-[#001845] cursor-pointer'>Projects</li>
        <li className='p-3 text-[#001845] hover:border-b-2 border-[#001845] cursor-pointer'>Contact me</li>
      </ul>

      <FontAwesomeIcon
                        icon={isMenuOpen ? faTimes : faBars}
                        size="2x"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="cursor-pointer xl:hidden block"
                    />
      <div className={`absolute lg:hidden top-24 left-0 w-full z-10 bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}

      style={{transition:"transform 0.3 ease,opacity 0.3s ease"}}
      >
        <li className='list-none w-full text-center p-4 hover:bg-[#001845] hover:text-white transition-all cursor-pointer'>Home</li>
        <li className='list-none w-full text-center p-4 hover:bg-[#001845] hover:text-white transition-all cursor-pointer'>About me</li>
        <li className='list-none w-full text-center p-4 hover:bg-[#001845] hover:text-white transition-all cursor-pointer'>Services</li>
        <li className='list-none w-full text-center p-4 hover:bg-[#001845] hover:text-white transition-all cursor-pointer'>Project</li>
        <li className='list-none w-full text-center p-4 hover:bg-[#001845] hover:text-white transition-all cursor-pointer'>Contact me</li>
      </div>
    </header>
  )
}

export default Navbar;