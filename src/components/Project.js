import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { projectDeatil } from "../utils/constants";

const Project = () => {
  return (
    <section class="service px-12 mt-[4.5rem] bg-[#23272ff2]">
      <h2 class="h-[40vh] grid place-items-center text-6xl font-bold mb-6 text-center text-white tracking-widest">
        My Projects
      </h2>
      <div class="mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-[#617d98]">
        {projectDeatil.map((x, i) => (
          <Link to={x?.projectLink}>
            <ProjectCard key={i} data={x} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Project;
