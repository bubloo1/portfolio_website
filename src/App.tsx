import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'

function App() {

  return (
      <div className='bg-blue-950 h-full'>
        <Navbar/>
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
      </div>
  )
}

export default App
