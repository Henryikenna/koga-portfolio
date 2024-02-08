import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { PiStrategy } from "react-icons/pi";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { RiRefreshLine, RiSpeakLine } from "react-icons/ri";
import { RiDoubleQuotesL } from "react-icons/ri";
import { LiaTimesSolid } from "react-icons/lia";
import profileImage from "./assets/pfpImg.jpg";

import { Link } from "react-scroll";
import MobileAboutSection from "./components/MobileAboutSection";
import DesktopAboutSection from "./components/DesktopAboutSection";

function App() {
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
  // const [tagLine, seTagline] = useState("Elevating brands, one click at a time\n- Your digital success, my passion.");
  const tagLine =
    "Elevating brands, one click at a time\n- Your digital success, my passion.";

  var today = new Date();
  var currentYear = today.getFullYear();

  console.log(currentYear);

  const wsmaItems = [
    {
      id: 1,
      icon: <PiStrategy />,
      title: "Strategic Savvy",
      description:
        "I don’t just throw darts blindly. My decisions are rooted in data analysis. I analyze metrics, identify trends, and optimize campaigns for peak performance.",
    },
    {
      id: 2,
      icon: <IoExtensionPuzzleOutline />,
      title: "Creative Alchemy",
      description:
        "Creativity isn't just talk—it's my secret ingredient. I mix data with imagination, crafting engaging stories that connect with audiences. From clever tweets to captivating blog posts, I ensure each piece stands out.",
    },
    {
      id: 3,
      icon: <RiRefreshLine />,
      title: "Channel Agnostic",
      description:
        "I'm experienced across various platforms, from social media to email marketing. I handle Facebook ads, SEO, and adapt strategies for each medium, maintaining brand consistency.",
    },
    {
      id: 4,
      icon: <RiSpeakLine />,
      title: "Consumer Whisperer",
      description:
        "Understanding consumer behavior is more than a skill—it's my superpower. I unravel user journeys, predict needs, and craft memorable experiences.",
    },
  ];

  const customerReviews = [
    {
      id: 1,
      name: "Harper Mitchell",
      review:
        '"Prompt responses, tailored solutions, definitely my go-to for all marketing needs!. Loved working with Koga."',
    },
    {
      id: 2,
      name: "Ava Sullivan",
      review:
        '"Impressed with the results-driven approach, increased conversions and ROI!"',
    },
  ];

  return (
    <>
      <div className=" ">
        <div name="home" className=" bg-orange-100">
          <section className=" fixed bg-orange-100 w-full flex items-center justify-between px-4 py-4 md:px-10 md:py-6 lg:hidden">
            <p className=" font-semibold text-lg">Chikako Koga</p>

            <div onClick={() => setNav(!nav)} className=" z-20 cursor-pointer">
              {nav ? (
                <LiaTimesSolid size={35} color="#fff" />
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

        {/* <MobileAboutSection /> */}
        {/* <DesktopAboutSection /> */}

        <div name="about" className=" justify-center items-center h-dvh flex">
          <div className="  px-4 my-2 flex flex-col justify-center lg:max-w-screen-lg lg:mx-auto lg:flex-row">
            <h2 className=" text-orange-300 font-medium text-lg pb-2 md:text-2xl lg:w-1/3">
              Hi there - Koga here
            </h2>

            <section className=" lg:w-2/3">
              <span className=" flex flex-col gap-y-2 text-[0.9rem] pb-5 md:text-[1.1rem]">
                <p className="">
                  As an online marketing specialist, I thrive at the
                  intersection of data-driven insights and creative flair. My
                  mission? To elevate brands, engage audiences, and drive
                  meaningful impact across digital channels.
                </p>

                <p className="">
                  Driven by an unwavering passion for the dynamic realm of
                  marketing, I have cultivated expertise in developing and
                  implementing strategies that resonate deeply with target
                  audiences.
                </p>

                <p className="">
                  My commitment to excellence is underscored by a meticulous
                  attention to detail and a profound understanding of consumer
                  behavior. Each project I undertake is approached with a
                  bespoke mindset, meticulously tailored to meet the unique
                  objectives and preferences of my clients.
                </p>

                <p className="">
                  Through a combination of strategic vision, innovative
                  thinking, and relentless dedication, I strive to deliver
                  measurable results that exceed expectations and propel brands
                  toward sustained growth and success.
                </p>
              </span>

              <button
                className="bg-orange-500 text-white uppercase px-4 py-3 rounded-full text-sm w-fit font-medium"
                href=""
              >
                <Link to="contact" smooth duration={500}>
                  Let's Chat
                </Link>
              </button>
            </section>
          </div>
        </div>

        <div className=" flex flex-col px-4 md:px-10 md:max-w-screen-lg md:mx-auto lg:justify-center lg:items-center md:h-dvh">
          <h2 className=" text-center font-bold text-xl text-orange-800 md:text-3xl">
            What Sets Me Apart?
          </h2>

          <section className=" pt-6 flex flex-col gap-5 md:flex-row md:flex-wrap md:justify-between md:items-start md:gap-y-5 md:gap-x-1 md:pt-14 lg:pt-16">
            {wsmaItems.map((item) => (
              <section
                key={item.id}
                className=" text-center flex flex-col justify-center items-center md:w-1/3 lg:w-1/4"
              >
                <section className=" text-[3.125rem] md:text-6xl">
                  {item.icon}
                </section>
                <h3 className=" py-2 font-medium text-lg md:text-xl md:py-3">
                  {item.title}
                </h3>
                <h4 className=" text-sm lg:text-base">{item.description}</h4>
              </section>
            ))}
          </section>
        </div>

        <div name="clients" className="px-4 my-2 flex flex-col h-dvh justify-center md:px-10 lg:px-0">
        <div
          
          className=" gap-4 flex flex-col md:max-w-screen-lg md:mx-auto lg:flex-row lg:justify-between lg:items-start"
        >
          {customerReviews.map((item) => (
            <section
              key={item.id}
              className="flex flex-col text-center items-center gap-1 lg:w-1/2"
            >
              <RiDoubleQuotesL size={40} color="#FED7AA" />
              <h3 className=" text-lg font-bold text-orange-400">
                {item.review}
              </h3>
              <h5 className=" text-sm">- {item.name}</h5>
            </section>
          ))}
        </div>
        </div>

        <div
          name="contact"
          className="my-5 h-dvh flex flex-col lg:items-center lg:flex-row lg:gap-20 lg:justify-center lg:my-0"
        >
          <div className=" px-4 flex flex-col justify-center md:px-10 md:max-w-screen-lg md:mx-auto lg:flex-row lg:gap-20 lg:justify-center lg:my-0">
            <section className=" lg:w-1/3">
              <h3 className="text-orange-300 font-medium text-lg pb-1 md:text-2xl lg:pb-2">
                Get in touch!
              </h3>
              <h5 className=" text-sm pb-3 md:text-[0.9rem]">
                Please provide some information on your goals and i'll get back
                to you in 2 business days to schedule a call.
              </h5>
            </section>

            <form action="" className=" lg:w-2/3">
              <section className=" flex flex-col gap-y-4">
                <span className=" flex flex-col w-full gap-2 ">
                  <label className="font-medium" htmlFor="name">
                    Name*
                  </label>
                  <input
                    className="bg-slate-200 rounded-sm py-3 px-3 focus:outline-none placeholder:text-slate-400"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </span>
                <span className=" flex flex-col w-full gap-2">
                  <label className="font-medium" htmlFor="email">
                    E-mail*
                  </label>
                  <input
                    className="bg-slate-200 rounded-sm py-3 px-3 focus:outline-none placeholder:text-slate-400"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@email.com"
                    required
                  />
                </span>
                <span className=" flex flex-col w-full gap-2">
                  <label className="font-medium" htmlFor="message">
                    Message*
                  </label>
                  <textarea
                    className="bg-slate-200 rounded-sm py-3 px-3 focus:outline-none placeholder:text-slate-400"
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="Message"
                  ></textarea>
                </span>
              </section>

              <button
                className="bg-orange-500 text-white uppercase px-4 py-3 rounded-full text-sm mt-5 font-medium"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

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
      </div>
    </>
  );
}

export default App;
