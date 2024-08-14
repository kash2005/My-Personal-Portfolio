import { useState } from 'react'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='flex justify-between items-center text-black py-3 px-8 md:px-32 bg-transparent'>
      <a href='#'>
        <img src="./src/assets/logo.png" alt='' className='w-57 h-[33] hover:scale-105 transition-all'></img>
      </a>  
      <ul className='hidden xl:flex items-center gap-9  text-base'>
        <li className='p-3 text-[#001845] hover:underline hover:bg-[#001845] hover:text-white rounded-md transition-all cursor-pointer'>Home</li>
        <li className='p-3 text-[#001845] hover:underline hover:bg-[#001845] hover:text-white rounded-md transition-all cursor-pointer'>About me</li>
        <li className='p-3 text-[#001845] hover:underline hover:bg-[#001845] hover:text-white rounded-md transition-all cursor-pointer'>Services</li>
        <li className='p-3 text-[#001845] hover:underline hover:bg-[#001845] hover:text-white rounded-md transition-all cursor-pointer'>Projects</li>
        <li className='p-3 text-[#001845] hover:underline hover:bg-[#001845] hover:text-white rounded-md transition-all cursor-pointer'>Contact me</li>
      </ul>
      <button className="relative hidden md:flex items-center justify-center gap-3 px-4 py-2 bg-white text-[#001845] font-semibold rounded-lg hover:bg-[#001845] hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300">view my work</button>
      
      <i className='bx bx-menu xl:hidden block text-5xl cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}></i>

      <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}

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