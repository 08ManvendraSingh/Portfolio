import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import {
  LINKEDIN_CDN,
  NETLIFY_CDN,
  coreLanguage,
  framework,
  post,
  projectDeatil,
  service,
} from "../utils/constants";
import PostCard from "./PostCard";
import ProjectCard from "./ProjectCard";

const Home = () => {
  return (
    <>
      {/* Home section starts */}

      <section class="hero h-screen grid grid-cols-1 md:grid-cols-2 bg-[#23272f] text-[#99a1b3] px-12 mt-[4.5rem] gap-4">
        <div className="flex items-center justify-center md:p-8 bg-[linear-gradient(rgba(35_39_47_0.7)_rgba(35_39_47_0.5))]">
          <div>
            <h1 class="text-4xl md:text-6xl font-bold mb-3 text-white">
              I'm Manvendra
            </h1>
            <p class="text-lg md:text-xl text-[#617D98] mb-10">
              Frontend React Js Developer
            </p>
            <button class="bg-[#23272ff2] border border-[#617D98] mb-8 text-lg font-semibold text-white shadow  px-6 py-2 rounded-full hover:bg-[#404756] hover:text-[#ebecf080] uppercase transition-all ease-linear">
              <a download href="../../Images/Manvendra Singh.pdf">
                Download Resume
              </a>
            </button>
            <div className="flex items-center gap-x-5">
              <span className="text-white text-2xl hover:text-[#617D98] transition-all ease-linear cursor-pointer">
                <Link to={LINKEDIN_CDN}>
                  <FaLinkedin />
                </Link>
              </span>
              <span className="text-white text-2xl hover:text-[#617D98] transition-all ease-linear cursor-pointer">
                <Link to={NETLIFY_CDN}>
                  <SiNetlify />
                </Link>
              </span>
            </div>
          </div>
        </div>

        <div class="hidden md:flex items-center justify-center rounded-lg">
          <img
            src="../../Images/user.jpeg"
            alt="Hero Image"
            class="lg:max-w-[25rem] lg:max-h-[30rem] md:max-w-[20rem] md:max-h-[25rem] rounded-lg"
          />
        </div>
      </section>

      {/* Home section ends */}

      {/* About Section  starts*/}

      <section class="about grid grid-cols-1 md:grid-cols-2 gap-8 px-12 py-20 bg-[#23272ff2]">
        <div class="flex-shrink-0 p-8">
          <img
            src="../../Images/user.jpeg"
            alt="About Image"
            class="lg:max-w-[25rem] lg:max-h-[30rem] md:max-w-[20rem] md:max-h-[25rem] rounded-lg shadow-md"
          />
        </div>

        <div class="flex-shrink-0 p-8">
          <h2 class="text-4xl tracking-[0.25rem] font-bold mb-3 text-white">
            About
          </h2>
          <div className="w-20 h-1 mb-5 bg-[#23272ff2]"></div>
          <p class="text-[#617d98] mb-4">
            I am Manvendra Singh, an aspiring frontend react js developer with
            knowledge of latest web technologies. I am proficient in making full
            blown web applications and especially frontend part of it. I have
            made static as well as dynamic web pages using HTML, CSS,
            Javascript. I am ready to collaborate on projects so I will be ready
            to contact you.
          </p>
          <p class="text-[#617d98] mb-4">
            Besides all this, I am keenly interested in Mathematics and
            especially in Solving Problems. I like chilling out on weekends and
            like to make new and interesting friends.
          </p>
          <button class="bg-[#23272ff2] text-white font-semibold shadow-md px-6 py-2 rounded-md hover:bg-[#ebecf080] transition-all ease-linear uppercase tracking-widest">
            <Link to="/about"> About Me</Link>
          </button>
        </div>
      </section>

      {/* About Section ends*/}

      {/* Service Section starts*/}

      <section class="service px-12 py-20 bg-[#23272f]">
        <h2 class="text-4xl font-bold mb-2 text-center text-white tracking-widest">
          Services
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-20">
          {service.map((x, i) => (
            <div
              key={i}
              class="bg-white text-[#617d98] transition-all ease-in-out hover:bg-transparent hover:text-white px-6 py-16 rounded-lg shadow-md"
            >
              <img
                src={x?.image}
                alt="Service Icon 1"
                class="w-12 h-12 mx-auto mb-4"
              />
              <h3 class="text-xl font-bold mb-2 text-center">{x?.title}</h3>
              <p class=" text-center">{x?.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Section ends*/}

      {/* Project Section starts */}

      <section class="service px-12 py-20 bg-[#23272ff2]">
        <h2 class="text-4xl font-bold mb-6 text-center text-white tracking-widest">
          Latest Works
        </h2>
        <p className="w-[50%] text-[#617d98] text-center mx-auto mb-24">
          In this section, you may find my latest works which I have done in my
          personal or professional career. Hope you all will like it and suggest
          me with better ideas to code or collaborate.
        </p>
        <div class="mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-[#617d98]">
          {projectDeatil.slice(0, 3).map((x, i) => (
            <Link to="/projects">
              <ProjectCard key={i} data={x} />
            </Link>
          ))}
        </div>
      </section>

      {/* Project Section ends */}

      {/* Contact section starts */}

      <div
        class="relative bg-cover bg-center h-screen after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-full after:opacity-60 after:bg-[#fff]"
        style={{
          backgroundImage: `url(
          "../../Images/contact.jpg"
        )`,
        }}
      >
        <div class="container mx-auto flex items-center justify-center h-full ">
          <div class="bg-[#23272f] text-center text-white z-10 px-20 pt-12 pb-48  rounded-md shadow-md w-full md:w-1/2 lg:w-2/3 xl:w-2/4 clip">
            <h2 class="text-4xl tracking-widest font-bold mb-4">
              Let's Get In Touch
            </h2>
            <p class="text-[#617d98] mb-4">
              I will be happy to connect with you anytime. As I am a social
              media geek, you can find me at most of the social media platforms.
              Click below and let's get in touch.
            </p>
            <button class="bg-[#23272ff2] text-lg font-semibold text-white shadow  px-6 py-2 rounded-full hover:bg-[#404756] hover:text-[#ebecf080] uppercase transition-all ease-linear tracking-wider">
              <Link to="/contact">Contact Me</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Contact section ends */}

      {/* Skills section starts */}

      <div class="mx-auto px-12 py-16 bg-[#23272f]">
        <h1 class="text-4xl tracking-widest text-center font-bold mb-16 text-white">
          Skills
        </h1>
        <div class="flex flex-wrap text-[#574517] py-10">
          <div class="w-full md:w-1/2 pr-4 mb-4 md:mb-0">
            <h2 class="text-3xl tracking-widest font-bold mb-4">Front End</h2>
            {coreLanguage.map((x, i) => (
              <div key={i} class="mb-4">
                <div class="relative pt-1">
                  <div class="flex mb-2 items-center justify-between">
                    <div class="w-full flex justify-between items-center text-lg font-semibold">
                      <span>{x?.name}</span>
                      <span className={`w-[${100 - x?.percent}%] inline-block`}>
                        {x?.percent}%
                      </span>
                    </div>
                  </div>
                  <div class="flex h-4 mb-4 overflow-hidden bg-gray-200 rounded-full">
                    <div
                      style={{ width: `${x?.percent}%` }}
                      class="flex flex-col justify-center bg-[#23272ff2]"
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div class="w-full md:w-1/2 md:pl-4 lg:pl-4 pl-0">
            <h2 class="text-3xl tracking-widest font-bold mb-4">Front End</h2>

            {framework.map((x, i) => (
              <div key={i} class="mb-4">
                <div class="relative pt-1">
                  <div class="flex mb-2 items-center justify-between">
                    <div class="w-full flex justify-between items-center text-lg font-semibold">
                      <span>{x?.name}</span>
                      <span className={`w-[${100 - x?.percent}%] inline-block`}>
                        {x?.percent}%
                      </span>
                    </div>
                  </div>
                  <div class="flex h-4 mb-4 overflow-hidden bg-gray-200 rounded-full">
                    <div
                      style={{ width: `${x?.percent}%` }}
                      class="flex flex-col justify-center bg-[#23272ff2]"
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills section starts */}

      {/* Post Section starts */}

      <section class="mx-auto py-16 px-12 bg-[#23272ff2] text-white">
        <h1 class="text-4xl font-bold text-center tracking-widest mb-8">
          Post
        </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
          {post.map((x, i) => (
            <PostCard key={i} data={x} />
          ))}
        </div>
      </section>

      {/* Post Section starts */}
    </>
  );
};

export default Home;
