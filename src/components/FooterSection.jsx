import React from 'react'
import { Link } from "react-scroll";

const FooterSection = () => {
    
  var today = new Date();
  var currentYear = today.getFullYear();

//   console.log(currentYear);
  return (
    <footer className=" bg-orange-100 py-8 px-4 md:px-10 md:py-12">
          <section className="lg:max-w-screen-lg lg:w-full lg:mx-auto lg:flex lg:flex-col lg:justify-between lg:items-center">
            <section className=" hidden text-lg gap-5 pb-5 lg:flex">
              <a className="desktopNavLink cursor-pointer">
                <Link to="home" spy={true} smooth duration={500}>
                  Home
                </Link>
              </a>
              <a className="desktopNavLink cursor-pointer">
                <Link to="about" spy={true} smooth duration={500}>
                  About
                </Link>
              </a>
              <a className="desktopNavLink cursor-pointer">
                <Link to="clients" spy={true} smooth duration={500}>
                  Clients
                </Link>
              </a>
              <a href="" className="desktopNavLink cursor-pointer">
                <Link to="contact" spy={true} smooth duration={500}>
                  Get in touch
                </Link>
              </a>
            </section>
            <h2 className="text-orange-500 text-2xl whitespace-pre-line font-medium pb-3 lg:text-4xl lg:pb-5">
              Chikako Koga
            </h2>
            <h4 className=" pb-3 lg:text-xl lg:pb-5">
              <span className="font-semibold">Office Address:</span> Hanzo Mon
              PREX South 2F, 2-5-1 Kojimachi Chyyoda-ku, Tokyo 102-0083 Japan.
            </h4>
            <h5 className=" pb-3 lg:text-xl lg:pb-5">Tokyo TKY</h5>
            <p className=" font-medium pb-2 lg:text-xl lg:pb-4">
              koga1a@outlook.jp | chikako.koga@welocalize.com
            </p>
            <p className=" pb-2 lg:text-xl lg:pb-4">
              <span className="font-semibold">Office:</span> +81.3.4332.1346
            </p>
            <p className=" pb-2 lg:text-xl lg:pb-4">
              <span className="font-semibold">Fax:</span> +81.3.6701.7218
            </p>

            <p className=" text-center text-gray-600 text-sm pt-4 md:text-base lg:text-lg lg:pt-8">
              &copy; Chikako Koga, {currentYear}
            </p>
          </section>
        </footer>
  )
}

export default FooterSection