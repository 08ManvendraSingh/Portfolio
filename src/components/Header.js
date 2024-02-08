import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navLink = ["about", "projects", "contact"];
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#23272f] text-[#99a1b3] shadow-md opacity-[0.98]">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-12">
        <div className="font-bold text-2xl cursor-pointer flex items-center ">
          <span className="  mr-1 pt-2 text-2xl font-bold text-[#e9b949] ">
            Manvendra Singh
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {!open ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="h-8 w-8"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          )}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 bg-[#e9b949] text-[#23272f]" : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="text-lg font-semibold hover:opacity-50 transition-all ease-in-out capitalize"
            >
              Home
            </Link>
          </li>
          {navLink.map((x, i) => (
            <li key={i} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                to={"/" + x}
                onClick={() => setOpen(false)}
                className="text-lg font-semibold hover:opacity-50 transition-all ease-in-out capitalize"
              >
                {x}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
