
import ProfilePicture from '../assets/1650383230191.jpg'

const Hero = () => {
  return (
    <div className="mx-auto max-w-screen-lg mt-28  flex justify-between">
        <div className="">
            <h1 className="text-5xl mb-6 font-semibold" 
              style={{backgroundClip: "text", 
                  color: "transparent", 
                  backgroundImage: "linear-gradient(to right, #EC4899, #8B5CF6, #4F46E5)", 
                  WebkitBackgroundClip: 'text',}} >
                    Hello I'm Shaik Allabaksh,
            </h1>
          

            <h1 className="text-5xl text-white font-semibold">Full-stack developer</h1>
            <p className='my-10 text-xl text-gray-50'>Experienced full-stack developer - MERN Stack</p>
            <button className="text-2xl mt-3 px-4 py-3
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white
            rounded-full font-medium">Download CV</button>
        </div>

        <div className="container w-96">
          <img className="rounded-full" src={ProfilePicture} alt="" />
          <div className='rounded-full' style={{width: "400px",
          height: "400px", 
          border: "solid 2px blue",
          marginTop: "-320px", marginLeft: "-200px"  }}></div>
          </div>
          {/* <div className='rounded-full' style={{width: "400px",
          height: "400px", 
          borderWidth: "2px",
          borderStyle: "solid",
          borderImage: "linear-gradient(to right, #EC4899, #8B5CF6, #4F46E5)", 
          borderImageSlice: 1,
          marginTop: "-320px", marginLeft: "-200px"  }}></div>
          </div> */}
    </div>
  )
}

export default Hero