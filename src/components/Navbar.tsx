import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="h-24 mx-auto max-w-screen-lg text-white py-8">
        <nav className="flex justify-between items-center">
            <div>
                <p className="text-xl font-semibold cursor-pointer">Protfolio</p>
            </div>
            <div className="flex text-lg">
                <p className="mr-10 cursor-pointer">Projects</p>
                <p className="mr-10 cursor-pointer">Technologies</p>
                <p className="mr-10 cursor-pointer">About me</p>
            </div>
            <div className="flex gap-5 text-lg">
                <FaLinkedin className="cursor-pointer"/>
                <FaGithub className="cursor-pointer"/>
            </div>
        </nav>
   </div>
  )
}

export default Navbar