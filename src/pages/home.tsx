import LinkedIn from "../assests/linkedin-in-brands-solid.svg";
import Github from "../assests/github-brands-solid.svg";
import Mail from "../assests/envelope-regular.svg";
import FluxbyteTechnologies from "../assests/Fluxbyte.svg";
import ReactImage from "../assests/React.png";
import CSSImage from "../assests/css.png";
import ExpressImage from "../assests/Express.png";
import GITImage from "../assests/git.png";
import MongoDBImage from "../assests/MongoDB.png";
import MySQLImage from "../assests/MySQL.png";
import Nestmage from "../assests/Nest.js.png";
import NextImage from "../assests/Next.js.png";
import NodeJSImage from "../assests/Node.js.png";
import PostgesSQLImage from "../assests/postgressql.png";
import PostmanImage from "../assests/postman.png";
import TailwindImage from "../assests/Tailwind CSS.png";
import TypeScriptImageImage from "../assests/typescript.png";
import { useInView } from "react-intersection-observer";
import SwitchToggle from "../component/SwitchToggle";
import { AlignJustify, Download, X } from 'lucide-react';
import { useState } from "react";
import Sidebar from "../component/Sidebar";


const techStack = [
  { name: "ReactJS", image: ReactImage },
  { name: "React Native", image: ReactImage },
  { name: "NextJs", image: NextImage },
  { name: "NestJs", image: Nestmage },
  { name: "Typescript", image: TypeScriptImageImage },
  { name: "Express.js", image: ExpressImage },
  { name: "Git", image: GITImage },
  { name: "TailwindCSS", image: TailwindImage },
  { name: "POSTMAN", image: PostmanImage },
  { name: "Node.JS", image: NodeJSImage },
  { name: "MongoDB", image: MongoDBImage },
  { name: "CSS", image: CSSImage },
  { name: "Pg Admin", image: PostgesSQLImage },
  { name: "MYSQL", image: MySQLImage },
];

function Home() {
  const [ref1, inView1] = useInView({ threshold: 0.1 });
  const [ref2, inView2] = useInView({ threshold: 0.1 });
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
  return (
    <main className="bg-white dark:bg-black">
      <div className="flex justify-between p-5 h-fit ">
        <div className="text-4xl italic text-black dark:text-white">Priya</div>
        <div className="sm:flex hidden gap-3 justify-center items-center">
          <SwitchToggle />
          <div className="w-10 h-10 rounded-full p-2 bg-[#222222] flex justify-center items-center hover:bg-slate-500">
            <a href="https://github.com/179priyasoni" target="blank">
              <img src={Github} alt="Github" className="h-full w-full" />
            </a>
          </div>
          <div className="w-10 h-10 rounded-full p-2 bg-[#222222] flex justify-center items-center  hover:bg-[#0077B5]">
            <a
              href="https://www.linkedin.com/in/priya-soni-a31a391a6/"
              target="blank"
            >
              <img src={LinkedIn} alt="LinkedIn" className="h-full w-full" />
            </a>
          </div>
          <div className="w-10 h-10 rounded-full p-2 bg-[#222222] flex justify-center items-center hover:bg-red-500">
            <a href="mailto:sonipriya1791@gmail.com" target="blank">
              <img src={Mail} alt="Mail" className="h-full w-full" />
            </a>
          </div>
        </div>
        <div className="flex sm:hidden items-center">
          <SwitchToggle />
        </div>
        <div className="flex sm:hidden items-center">
          <> {
            isSidebarOpen ?
              <X className="text-black dark:text-white" onClick={() => setIsSidebarOpen(false)} />
              :
              <AlignJustify className="text-black dark:text-white" onClick={() => setIsSidebarOpen(true)} />
          }
          </>
        </div>
      </div>
      {
        isSidebarOpen ?
          <div className="sm:hidden block">
            <Sidebar setIsSidebarOpen={() => setIsSidebarOpen(false)}/>
          </div>
          :
          <>
            <section className="flex h-screen items-center justify-center relative hero-bg  opacity-100">
              <div className="section-container flex justify-center">
                <div className="dark:dark-overlay-left"></div>
                <div className="dark:dark-overlay-right"></div>
                <div className="flex flex-col items-center justify-center gap-3 w-2/3">
                  <h4 className="text-xs font-semibold text-black dark:text-white">BASED IN AHMEDABAD</h4>
                  <h1 className="text-3xl sm:text-5xl md:text-6xl text-center leading-[2.25rem] md:leading-[4rem] space-x-2 sm:space-x-3 hero-text">
                    <span className="text-black dark:text-white">Software</span>
                    <span className="text-black dark:text-white">Engineer</span>
                    <span className="text-[#3b82f6]">Specializing</span>
                    <span className="text-[#3b82f6]">In</span>
                    <span className="text-[#3b82f6]">Web</span>
                    <span className="text-[#3b82f6]">&amp;</span>
                    <span className="text-[#3b82f6]">Mobile</span>
                    <span className="text-black dark:text-white">Applications</span>
                  </h1>
                  <p className="text-center text-gray-600 dark:text-gray-400 font-semibold">
                    Hi, I'm Priya, I create solutions across all layers of software
                    engineering.
                  </p>
                  <div className="flex dowmload-cv items-center gap-4 text-sm">
                    <button className="dark:bg-[#222222] text-black dark:text-white px-4 py-2 rounded-md border border-slate-500 see-work-btn" onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
                      See My Work
                    </button>
                    <a
                      href="CV/CV.pdf"
                      download="Priya_Soni_CV"
                      className="flex items-center gap-1.5 text-[#3b82f6]"
                    >
                      <Download />
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </section>
            <section id="experience" className="section-container pt-10">
              <h2 className="text-3xl sm:text-5xl md:text-6xl text-black dark:text-white">Work Experience</h2>
              <div className="py-7 md:py-14 flex  gap-20">
                <div
                  className={`lg:w-1/2 ${inView1 ? "animate-top" : ""}`}
                  ref={ref1}
                >
                  <div
                    id="atg"
                    className="flex flex-col gap-10 transition-opacity duration-500 opacity-100"
                  >
                    <div className="flex">
                      <div className="flex-shrink-0 flex flex-col">
                        <img
                          src={FluxbyteTechnologies}
                          height="50"
                          width="50"
                          className="rounded-full object-cover"
                          alt="Fluxbyte Technologies logo" />
                        <div className="w-0.5 mx-auto flex-1 dark:!bg-white !bg-slate-700"></div>
                      </div>
                      <div className="space-y-6 pb-14">
                        <div className="ml-4">
                          <h3 className="text-xl sm:text-2xl text-black dark:text-white">
                            Fluxbyte Technologies
                          </h3>
                          <p className="text-sm sm:text-base text-[#3b82f6]">
                            Full-Stack Developer | <span>Feb 2023 - Now</span>
                          </p>
                        </div>
                        <ul className="mt-3 sm:text-lg space-y-4 sm:space-y-8">
                          <li className="relative">
                            <p className="ml-4 text-black dark:text-white">
                              Collaborated on UI/UX design and operational tasks by
                              creating responsive user interfaces, streamlining
                              workflows through task automation to enhance team
                              efficiency, addressing production issues, and
                              maintaining detailed documentation of application
                              architecture to facilitate effective knowledge sharing.
                            </p>
                            <span className="absolute -left-[33px] top-3.5 border -translate-y-1/2 size-4 dark:!bg-white !bg-slate-700 rounded-full"></span>
                          </li>
                          <li className="relative">
                            <p className="ml-4 text-black dark:text-white">
                              Boosted application visibility and performance by
                              implementing optimized coding practices and scalable
                              components. Integrated external APIs to enhance
                              functionality and ensured secure, user-friendly
                              authentication systems to improve user engagement and
                              retention.
                            </p>
                            <span className="absolute -left-[33px] top-3.5 border -translate-y-1/2 size-4 dark:!bg-white !bg-slate-700 rounded-full"></span>
                          </li>
                          <li className="relative">
                            <p className="ml-4 text-black dark:text-white">
                              Streamlined development through the creation of reusable
                              React components, custom hooks, and utilities,
                              seamlessly integrated third-party APIs, and implemented
                              secure authentication mechanisms using JWT and OAuth2.
                            </p>
                            <span className="absolute -left-[33px] top-3.5 border -translate-y-1/2 size-4 dark:!bg-white !bg-slate-700 rounded-full"></span>
                          </li>
                        </ul>
                        <div className="flex lg:hidden flex-col gap-3 ml-4">
                          <h3 className="text-xl sm:text-2xl text-black dark:text-white">Tech Stack</h3>
                          <div className="flex flex-wrap gap-1 sm:gap-2">

                            {techStack.map((tech) => (
                              <div
                                key={tech.name}
                                className="rounded-lg pl-2 pr-4 py-2 bg-slate-200 dark:bg-[#121212] flex items-center gap-3 tech-icon"
                              >
                                <img
                                  src={tech.image}
                                  alt={tech.name}
                                  className="h-5 w-5 sm:h-8 sm:w-8 lg:h-14 lg:w-14 object-cover" />
                                <p className="text-lg text-black dark:text-white">{tech.name}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`w-1/2 hidden lg:flex flex-col gap-6 sticky h-full top-12 ${inView2 ? "animate-bottom" : ""}`}
                  ref={ref2}
                >
                  <h3 className="text-xl sm:text-2xl text-black dark:text-white">Tech Stack</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {techStack.map((tech) => (
                      <div
                        key={tech.name}
                        className="rounded-lg pl-2 pr-4 py-2  bg-slate-200 dark:bg-[#121212] flex items-center gap-3 tech-icon"
                      >
                        <img
                          src={tech.image}
                          alt={tech.name}
                          className="h-16 w-16 object-cover" />
                        <p className="text-lg text-black dark:text-white">{tech.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section><section id="about" className="flex flex-col gap-10">
              <div className="py-5 md:py-12 relative">
                <div className="absolute inset-0 object-cover h-full w-full bg-gradient-to-r to-fuchsia-600 from-sky-500" />
                <div className="section-container max-w-6xl mx-auto pb-8 flex flex-col items-center gap-6 relative">
                  <h2 className="text-2xl sm:text-3xl 2xl:text-4xl text-center font-bold ">
                    Hi, I'm Priya. Nice to meet you.
                  </h2>
                  <p className="sm:w-[60%] text-center mx-auto sm:text-xl 2xl:text-2xl">
                    Experienced Full Stack Developer crafting robust solutions.
                    Passionate nature photographer. Thrive in both backend and
                    frontend development, blending tech with creativity.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/priya-soni-a31a391a6/"
                    target="blank"
                    className="border-2 rounded-lg flex justify-center items-center gap-2  w-36 h-12"
                  >
                    <span className="">Let's Connect</span>
                    <span className="rounded-full p-1.5 hidden "></span>
                  </a>
                </div>
              </div>
            </section>
            <div className="section-container mx-auto p-4 flex flex-col justify-center items-center">
              <div className="text-4xl italic mb-5 text-black dark:text-white">Priya</div>
              <div className="flex gap-3 justify-center items-center">
                <div className="w-10 h-10 rounded-full p-2 bg-[#222222] flex justify-center items-center">
                  <a href="https://github.com/179priyasoni" target="blank">
                    <img src={Github} alt="Github" className="h-full w-full" />
                  </a>
                </div>
                <div className="w-10 h-10 rounded-full p-2 bg-[#222222] flex justify-center items-center">
                  <a
                    href="https://www.linkedin.com/in/priya-soni-a31a391a6/"
                    target="blank"
                  >
                    <img src={LinkedIn} alt="LinkedIn" className="h-full w-full" />
                  </a>
                </div>
                <div className="w-10 h-10 rounded-full p-2 bg-[#222222] flex justify-center items-center">
                  <a href="mailto:sonipriya1791@gmail.com" target="blank">
                    <img src={Mail} alt="Mail" className="h-full w-full" />
                  </a>
                </div>
              </div>
              <p className="mt-6 text-black dark:text-white italic">sonipriya1791@gmail.com</p>
              <p className="text-center mt-6 text-sm text-gray-500">
                Made by Me © 2025
              </p>
            </div>
          </>
      }
    </main>
  );
}

export default Home;