import React from 'react';
import LinkedIn from "../assests/linkedin-in-brands-solid.svg";
import Github from "../assests/github-brands-solid.svg";
import Mail from "../assests/envelope-regular.svg";

type sidebarProps ={
  setIsSidebarOpen:(data:boolean) => void
}
function Sidebar(data:sidebarProps) {
  const {setIsSidebarOpen} =data

  const handleScrollToSection = (sectionId: string) => {
    setIsSidebarOpen(false); 
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 300); 
  };
  return (
    <div className='sm:hidden bg-white dark:bg-black overflow-hidden dark:text-white text-black w-full flex flex-col gap-10 mx-5'>
      <div className='flex flex-col gap-5'>
        <div className='text-xl font-medium' onClick={() => handleScrollToSection('experience')}>
          Experinece
        </div>
        <div className='text-xl font-medium' onClick={() => handleScrollToSection('about')}>
          About me
        </div>
        <div className='text-xl font-medium'>
          Projects
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='text-slate-600 text-3xl font-medium'>
          SAY HELLO
        </div>
        <div className='text-xl'>
          sonipriya1791@gmail.com
        </div>
        <div className="flex gap-3 mt-2">
          <div className="w-10 h-10 rounded-full p-2 bg-[#222222] flex justify-center items-center ">
            <a href="https://github.com/179priyasoni" target="blank">
              <img src={Github} alt="Github" className="h-full w-full" />
            </a>
          </div>
          <div className="w-10 h-10 rounded-full p-2 bg-[#222222] flex justify-center items-center ">
            <a
              href="https://www.linkedin.com/in/priya-soni-a31a391a6/"
              target="blank"
            >
              <img src={LinkedIn} alt="LinkedIn" className="h-full w-full" />
            </a>
          </div>
          <div className="w-10 h-10 rounded-full p-2 bg-[#222222] flex justify-center items-center ">
            <a href="mailto:sonipriya1791@gmail.com" target="blank">
              <img src={Mail} alt="Mail" className="h-full w-full" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar