import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-screen-lg text-white py-8">
        <nav className="flex justify-between items-center">
            <div>
                <p className="text-2xl font-semibold cursor-pointer">Protfolio</p>
            </div>
            <div className="flex text-lg font-medium">
                <a href="#project"><p className="mr-10 cursor-pointer">Projects</p></a> 
                <a href="#skills"><p className="mr-10 cursor-pointer">Skills</p></a>
                <a href="#about"><p className="mr-10 cursor-pointer">About me</p></a>
            </div>
            <div className="flex gap-5 text-lg">
                <Link to="https://www.linkedin.com/in/shaik-allabaksh-0996a2219/" target="_blank"><FaLinkedin className="cursor-pointer"/></Link>
                <Link to="https://github.com/bubloo1" target="_blank"><FaGithub className="cursor-pointer"/></Link>
            </div>
        </nav>
   </div>
  )
}

export default Navbar