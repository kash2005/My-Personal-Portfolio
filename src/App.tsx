import About from './components/About.tsx'
import Hero from './components/Hero.tsx'
import Navbar from './components/Navbar.tsx'
import Services from './components/Services.tsx'
function App() {

  return (
    <div className="w-full h-full absolute bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  )
}

export default App
