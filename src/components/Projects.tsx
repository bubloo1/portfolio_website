import LinkedinImg from '../assets/linkedin.png'
import AnjinamImg from '../assets/Screenshot_15-7-2024_103723_big-anjinam-game.onrender.com.jpeg'

const Projects = () => {
  return (
    <section id='project' className='my-12'>
      <h1 className='text-5xl text-white max-w-screen-lg mx-auto my-10 max-md:flex justify-center'>Projects</h1>
      <div className="max-w-2xl mx-auto flex flex-col justify-between sm:flex-row max-sm:justify-center max-sm:items-center rounded shadow-lg ">
        <div className='w-72 border-solid border-2 border-customColor p-3 rounded-lg'>
          <a href="https://big-anjinam-game.onrender.com" target='_blank'>
            <img className="w-full rounded" src={AnjinamImg} alt="Card Image"/>
          </a>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">
              <a href="https://big-anjinam-game.onrender.com" target='_blank'>Anjinam Board game</a>
            </div>
            <p className="text-base text-white">
              Developed this multiplayer board game, “Anjinam”, currently not available online,
              showcasing creative problem-solving and programming skills.
            </p>
          </div>
        </div>
        <div className='w-72 border-solid border-2 border-customColor p-3 rounded-lg mt-4 sm:mt-0'>
          <a href="https://linkedinfrontendrender.onrender.com/" target='_blank'>
            <img className="w-full rounded" src={LinkedinImg} alt="Card Image"/>
          </a>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white"><a href="https://linkedinfrontendrender.onrender.com/" target='_blank'>LinkedIn Clone</a></div>
            <p className="text-base text-gray-50">
              Build a LinkedIn clone from scratch using React.js express.js, MySQL.
              With features such as JWT auth, messaging, etc.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
