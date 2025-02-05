"use client";
import { MenuIcon } from "lucide-react";
import React, {useState} from "react";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (link: string) => {
    router.push(`#${link}`);
    setIsOpen(false);
  };
  
  return (
    <div id="nav-bar" className="fixed bottom-5 right-5 md:bottom-20 md:right-20 z-20 flex w-fit gap-4 flex-row-reverse justify-center items-center">
     <button className={`z-10 text-yellow-light w-fit p-3 group-hover:hidden flex items-center justify-center border-2 border-violet-dark rounded-full hover:bg-violet-medium hover:scale-105 active:scale-100 transition-all duration-100 shadow-hard shadow-violet-dark ${isOpen ? "bg-violet-medium" : "bg-violet-base opacity-80"}`} onClick={handleOpen}>
      <MenuIcon className="size-8"/>
     </button>
      <div className={`flex justify-center gap-4 py-2 px-4 rounded-3xl ${isOpen ? "opacity-100 translate-x-50" : "translate-x-full opacity-0"} transition-all duration-500 ease-in-out`}>
        <button className="bg-yellow-light hover:bg-yellow-base shadow-hard shadow-violet-dark border-violet-dark w-fit rounded-xl border-2 px-4 py-2 transition-all duration-100 ease-in-out active:scale-100 active:bg-yellow-medium hover:scale-105 font-space-mono" onClick={() => handleScroll("hero-section")}>
          Home
        </button>
        <button className="bg-yellow-light hover:bg-yellow-base shadow-hard shadow-violet-dark border-violet-dark w-fit rounded-xl border-2 px-4 py-2 transition-all duration-100 ease-in-out active:scale-100 active:bg-yellow-medium hover:scale-105 font-space-mono" onClick={() => handleScroll("working-experiences")}>
          Experiences
        </button>
        <button className="bg-yellow-light hover:bg-yellow-base shadow-hard shadow-violet-dark border-violet-dark w-fit rounded-xl border-2 px-4 py-2 transition-all duration-100 ease-in-out active:scale-100 active:bg-yellow-medium hover:scale-105 font-space-mono" onClick={() => handleScroll("projects")}>
          Projects
        </button>
        <button className="bg-yellow-light hover:bg-yellow-base shadow-hard shadow-violet-dark border-violet-dark w-fit rounded-xl border-2 px-4 py-2 transition-all duration-100 ease-in-out active:scale-100 active:bg-yellow-medium hover:scale-105 font-space-mono" onClick={() => handleScroll("contact")}>
          Contact
        </button>
      </div>
    </div>
  );
};

export default NavBar;
