import React from "react";
import { Link } from "react-router-dom";
import { LINKEDIN_CDN } from "../utils/constants";

const Contact = () => {
  return (
    <div class="mx-auto min-h-[calc(100vh-5rem-188px)] py-20 mt-[4.5rem] text-center bg-[#23272f] text-[#617d98]">
      <div class="grid grid-cols-1">
        <div class="mb-16">
          <h1 class="text-6xl text-white font-bold">Contact</h1>
        </div>

        <div className="max-w-[700px] mx-auto">
          <p class="text-lg mb-8">
            If you are looking to get ahold of me, you can send me an email at
            <span className="ml-1 text-white">
              <a href="mailto:shekhawatmanvendra08@gmaill.com">
                shekhawatmanvendra08@gmaill.com
              </a>
            </span>
          </p>
          <p class="text-lg">
            You can also reach me on LinkedIn at
            <span className="ml-1 text-white">
              <Link to={LINKEDIN_CDN}>Manvendra Singh@LINKEDIN</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
