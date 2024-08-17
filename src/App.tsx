import About from './components/About.tsx'
import Contact from './components/Contact.tsx'
import Hero from './components/Hero.tsx'
import Navbar from './components/Navbar.tsx'
import Projects from './components/Projects.tsx'
import Services from './components/Services.tsx'
function App() {

  return (
    <div className="w-full h-full bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
