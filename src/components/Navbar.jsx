import React, { useState } from "react";
import { navLinks } from "../utils/constant";
import { Link } from "react-router-dom";
import logoEcoGreen from "../assets/images/logoEcoGreen.png";
import NavbarModal from "./NavbarModal";

const NavbarComponents = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <nav className="-z-0 mx-auto max-w-screen-xl">
      <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-between p-4">
        {/* Logos */}
        <Link
          className="flex items-center space-x-3 rtl:space-x-reverse"
          to={"/"}
        >
          <img
            alt="EcoGreen Logo"
            className="h-10 lg:h-14"
            src={logoEcoGreen}
          />
        </Link>

        {/* Hamburger Menu */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          type="button"
          onClick={() => setOpenModal(true)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 17 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1h15M1 7h15M1 13h15"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0  lg:gap-14 rtl:space-x-reverse">
            {navLinks.map((link) => {
              return (
                <li key={link.name}>
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
      </div>
      <NavbarModal openModal={openModal} setOpenModal={setOpenModal} />
    </nav>
  );
};

export default NavbarComponents;
