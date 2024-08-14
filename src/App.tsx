import About from './components/About.tsx'
import Hero from './components/Hero.tsx'
import Navbar from './components/Navbar.tsx'
import Projects from './components/Projects.tsx'
import Services from './components/Services.tsx'
function App() {

  return (
    <div className="w-full h-full absolute bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
    </div>
  )
}

export default App
