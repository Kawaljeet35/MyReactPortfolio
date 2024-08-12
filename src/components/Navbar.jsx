import { useState } from "react";

export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed flex justify-around sm:justify-between items-center top-0 w-full border-black border-2" style={{ backgroundColor: 'rgb(36, 36, 36)' }}>
            <div className="p-3">
                <a href="#" className="text-sm md:text-2xl lg:text-3xl font-bold text-[#ffa500] hover:text-white hover:bg-[#ffa500] p-3 transition-all duration-300 ease-in-out">
                    Portfolio
                </a>
            </div>
            <ul className="flex items-center flex-wrap justify-end space-x-1 lg:space-x-4 text-white text-sm md:text-2xl lg:text-3xl p-3">
                <li>
                    <a href="#about-me" className="hover:bg-[#ffa500] p-3 transition-all duration-300 ease-in-out">
                        About Me
                    </a>
                </li>
                <li>
                    <a href="#my-skills" className="hover:bg-[#ffa500] p-3 transition-all duration-300 ease-in-out">
                        My Skills
                    </a>
                </li>
                <li>
                    <a href="#projects" className="hover:bg-[#ffa500] p-3 transition-all duration-300 ease-in-out">
                        My Projects
                    </a>
                </li>
                <li>
                    <a href="#contacts" className="hover:bg-[#ffa500] p-3 transition-all duration-300 ease-in-out">
                        Contact Me
                    </a> 
                </li>
            </ul>
        </nav>
    );
}
