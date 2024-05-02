import React from 'react';
import { Navbar } from 'flowbite-react';
import { Link, NavLink } from 'react-router-dom';
import logoEcoGreen from '../assets/images/logoEcoGreen.png';
const NavbarComponents = () => {
  return (
    <Navbar fluid rounded className="max-w-screen-xl mx-auto mt-2">
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src={logoEcoGreen} className="mr-3 h-9 md:h-14" alt="EcoGreen Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavLink to="/" active>
          Home
        </NavLink>
        <NavLink as={Link} to="/about">
          About
        </NavLink>
        <NavLink to="/calculatin">Calculating</NavLink>
        <NavLink to="/team">Team</NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponents;
