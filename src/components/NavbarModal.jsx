import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../utils/constant";

const NavbarModal = ({ openModal, setOpenModal }) => {
  return (
    <div
      className={`fixed left-0 top-0 z-[9999] flex w-full flex-col items-center justify-center gap-8 bg-white/10 backdrop-blur-md transition-all duration-500 ${openModal ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="relative h-3/4 w-full max-w-screen-xl rounded-lg border border-black bg-white">
        <h1 className="m-5 font-bold text-3xl text-[#729975]">EcoGreen</h1>
        <div className="w-full md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-bold md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0  lg:gap-14 rtl:space-x-reverse">
            {navLinks.map((link) => {
              return (
                <li key={link.name} className="mt-2">
                  <a
                    href={link.path}
                    className={({ isActive }) => (isActive ? "" : "")}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* close button */}
        <button
          className="absolute right-5 top-5"
          type="button"
          onClick={() => setOpenModal(false)}
        >
          <label htmlFor="close-button" className="sr-only">
            Close Button
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={45}
            height={45}
            viewBox="0,0,256,256"
            className="hover:text-red-500"
            id="close-button"
          >
            <g
              fill="#d01b1b"
              fillRule="nonzero"
              stroke="none"
              strokeWidth={1}
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit={10}
              strokeDasharray=""
              strokeDashoffset={0}
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              style={{ mixBlendMode: "normal" }}
            >
              <g transform="scale(3.55556,3.55556)">
                <path d="M19,15c-1.023,0 -2.04812,0.39087 -2.82812,1.17188c-1.562,1.562 -1.562,4.09425 0,5.65625l14.17188,14.17188l-14.17187,14.17188c-1.562,1.562 -1.562,4.09425 0,5.65625c0.78,0.78 1.80513,1.17188 2.82813,1.17188c1.023,0 2.04812,-0.39088 2.82813,-1.17187l14.17188,-14.17187l14.17188,14.17188c1.56,1.562 4.09525,1.562 5.65625,0c1.563,-1.563 1.563,-4.09325 0,-5.65625l-14.17187,-14.17187l14.17188,-14.17187c1.562,-1.562 1.562,-4.09425 0,-5.65625c-1.56,-1.561 -4.09625,-1.562 -5.65625,0l-14.17187,14.17188l-14.17187,-14.17187c-0.78,-0.78 -1.80513,-1.17187 -2.82812,-1.17187z" />
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavbarModal;
