import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'

function App() {

  return (
      <div className='bg-blue-950'>
        <Navbar/>
        <Hero/>
        <Projects/>
        <Skills/>
        <About/>
      </div>
  )
}

export default App
