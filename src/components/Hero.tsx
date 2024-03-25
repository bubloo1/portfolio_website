import { CgProfile } from "react-icons/cg";
import ProfilePicture from '../assets/1650383230191.jpg'

const Hero = () => {
  return (
    <div className="mx-auto max-w-screen-lg flex flex-row justify-between">
        <div className="">
            <h1>Hello I'm Shaik Allabaksh</h1>
            <h1>full Stack developer</h1>
            <button>Download CV</button>
        </div>
        <div className=" bg-black">
            <img className="" src={ProfilePicture} alt="" />
        </div>
    </div>
  )
}

export default Hero