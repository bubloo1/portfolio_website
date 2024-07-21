import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../App.css'
import { useState } from "react";

const Navbar = () => {
    const [bgColor, setBgColor] = useState('rgb(36, 223, 36)');
    const [bgColor1, setBgColor1] = useState('rgb(36, 223, 36)');
    
  return (
    <div className="mx-auto max-w-screen-lg text-white py-8 max-[500px]:mx-8">
        <nav className="flex justify-between items-center">
            <div>
                <p className="text-2xl font-semibold cursor-pointer display-none max-[500px]:hidden">Shaik <span style={{color: 'rgb(36, 223, 36)', fontSize:'30px'}}>.</span></p>
            </div>
            <div className="flex text-lg font-medium">
                <a href="#project"><p className="mr-10 cursor-pointer hover:underline hover:underline-offset-8 hover:text-customColor" >Projects</p></a> 
                <a href="#skills"><p className="mr-10 cursor-pointer hover:underline hover:underline-offset-8 hover:text-customColor">Skills</p></a>
                <a href="#about"><p className="mr-10 cursor-pointer hover:underline hover:underline-offset-8 hover:text-customColor">About me</p></a>
            </div>
            <div className="flex gap-5 text-lg">
                <Link to="https://www.linkedin.com/in/shaik-allabaksh-0996a2219/" target="_blank"><FaLinkedin className="cursor-pointer icon" 
                style={{color: bgColor}} onMouseEnter={() => setBgColor('white')} onMouseLeave={() => setBgColor('rgb(36, 223, 36)')}/></Link>
                <Link to="https://github.com/bubloo1" target="_blank"><FaGithub className="cursor-pointer" 
                style={{color: bgColor1}} onMouseEnter={() => setBgColor1('white')} onMouseLeave={() => setBgColor1('rgb(36, 223, 36)')}/></Link>
            </div>
        </nav>
   </div>
  )
}

export default Navbar