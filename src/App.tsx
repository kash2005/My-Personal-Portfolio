import Hero from './components/Hero.tsx'
import Navbar from './components/Navbar.tsx'
import SlidingText from './constrant/ImageSlider.tsx'
function App() {

  return (
    <div className="w-full h-full absolute bg-white">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
