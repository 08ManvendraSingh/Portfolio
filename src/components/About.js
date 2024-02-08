import React from "react";
import { LINKEDIN_CDN } from "../utils/constants";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div class="relative mx-auto min-h-[calc(100vh-5rem-188px)] py-20 mt-[4.5rem] text-center bg-[#23272f] text-[#617d98]">
      <div class="grid grid-cols-1">
        <div class="mb-16">
          <h1 class="text-5xl text-white font-bold">About Me</h1>
        </div>

        <div className="max-w-[700px] mx-auto">
          <p class="text-lg">
            Hello, I am Manvendra Singh and I am a Frontend React js Developer.
            I live and work in India. I spend most of my day, experimenting with
            HTML, CSS and JavaScript (and its endless list of frameworks). I
            enjoy coding and the challenge of learning something new everyday.
            You can also find me at linkedin.
          </p>
          <Link to={LINKEDIN_CDN} className="text-white font-semibold">
            LINKEDIN-LINK
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
