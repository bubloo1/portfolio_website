
import ProfilePicture from '../assets/1650383230191.jpg'
// import sdgfg from '../../public/resume.pdf'
import '../App.css'
const Hero = () => {
  return (
    <div className="mx-auto max-w-screen-lg mt-28  flex md:flex max-md:flex-col-reverse max-md:mt-12">
        <div className="mx-auto max-[420px]:text-center">
            <h1 className="text-5xl mb-6 font-semibold max-sm:text-4xl max-[420px]:text-3xl text-customColor">
                  {/* <span className='text-white'>Hello I'm</span> <span className='text-customColor'>Shaik Allabaksh,</span> */}
                  Hello I'm Shaik Allabaksh,
            </h1>

            <h1 className="text-5xl text-white font-semibold max-md:text-4xl">Full-stack developer</h1>
            <p className='my-10 text-xl text-gray-50'>Experienced full-stack developer - MERN Stack</p>
           <div className=' max-md:flex justify-center mt-14'>
            <a href="/resume.pdf"  download="Shaik_Allabaksh_CV.pdf" 
              className="text-2xl text-customColor border-2 border-customColor  px-4 py-3 rounded-full font-medium text">Download CV</a>
           </div>
        </div>

        <div className="container rounded-full w-96 m-auto ">

          <img className="rounded-full p-3" src={ProfilePicture} alt="" />
          <div className="rotating-circle"></div>
        </div>
          
    </div>
  )
}

export default Hero