import {React, useState} from 'react'

import { Link } from "react-scroll";
import { HiBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import profileImage from "../assets/pfpImg.jpg";

const HomeSection = () => {
    
  const [nav, setNav] = useState(false);


  const navLinks = [
    {
      id: 1,
      name: "home",
    },
    {
      id: 2,
      name: "about",
    },
    {
      id: 3,
      name: "clients",
    },
    {
      id: 4,
      name: "contact",
    },
  ];


  const tagLine =
    "Elevating brands, one click at a time\n- Your digital success, my passion.";

    
  return (
    <>
        <div name="home" className=" bg-orange-100">
          <section className=" fixed bg-orange-100 w-full flex items-center justify-between px-4 py-4 z-20 md:px-10 md:py-6 lg:hidden">
            <p className=" font-semibold text-lg">Chikako Koga</p>

            <div onClick={() => setNav(!nav)} className="relative z-20 cursor-pointer">
              {nav ? (
                <LiaTimesSolid size={35} />
              ) : (
                <HiBars3 size={35} />
              )}
            </div>
          </section>

          <section className=" hidden fixed w-full bg-orange-100 py-10 z-20 lg:flex">
            <div className=" max-w-screen-lg w-full mx-auto flex justify-between items-center">
              <p className=" font-semibold text-2xl">Chikako Koga</p>

              <ul className=" flex gap-5 text-lg">
                <li className="desktopNavLink cursor-pointer">
                  <Link
                    to="home"
                    activeClass="activeLink"
                    spy={true}
                    smooth
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li className="desktopNavLink cursor-pointer">
                  <Link
                    to="about"
                    activeClass="activeLink"
                    spy={true}
                    smooth
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li className="desktopNavLink cursor-pointer">
                  <Link
                    to="clients"
                    activeClass="activeLink"
                    spy={true}
                    smooth
                    duration={500}
                  >
                    Clients
                  </Link>
                </li>
                <li className="desktopNavLink cursor-pointer">
                  <Link
                    to="contact"
                    activeClass="activeLink"
                    spy={true}
                    smooth
                    duration={500}
                  >
                    Get in touch
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          <section className=" flex flex-col relative pt-28 pb-10 justify-center text-center items-center gap-2 md:gap-4">
            <img
              className=" w-28 h-28 rounded-full object-cover md:w-48 md:h-48"
              src={profileImage}
              alt=""
            />
            <p
              id="tagLine"
              className=" text-orange-500 text-lg whitespace-pre-line font-medium md:text-2xl"
            >
              {tagLine}
            </p>
          </section>
        </div>


        {nav && (
          <ul className="flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-orange-600 via-orange-500 to-orange-400 text-white z-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link.name}
                  smooth
                  duration={500}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
    </>
  )
}

export default HomeSection