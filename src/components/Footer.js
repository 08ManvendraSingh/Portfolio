import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div class="px-12 py-16 bg-[#222] mx-auto p-4">
      <div class="grid grid-cols-1 gap-4">
        <div class="col-span-3 md:col-span-1">
          <div class="flex justify-center space-x-4">
            <Link
              className="text-white text-2xl hover:text-[#617D98] transition-all ease-linear cursor-pointer"
              to="https://www.linkedin.com/in/manvendra-singh08/"
            >
              <FaLinkedin />
            </Link>
            <Link
              className="text-white text-2xl hover:text-[#617D98] transition-all ease-linear cursor-pointer"
              to="https://app.netlify.com/teams/shekhawatmanvendra08/sites"
            >
              <SiNetlify />
            </Link>
            <Link
              className="text-white text-2xl hover:text-[#617D98] transition-all ease-linear cursor-pointer"
              to="https://github.com/08ManvendraSingh"
            >
              <FaGithub />
            </Link>
          </div>
        </div>

        <div class="col-span-3 md:col-span-2 text-center">
          <p class="text-[#617D98] text-xl">
            © 2024 Manvendra Singh. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
