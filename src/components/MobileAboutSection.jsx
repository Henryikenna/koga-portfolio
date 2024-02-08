import React from 'react';

import { Button, Link } from "react-scroll";

const MobileAboutSection = () => {
  return (
    <div
    name="about"
    className="  px-4 my-2 h-dvh flex flex-col justify-center lg:hidden"
  >
    <h2 className=" text-orange-300 font-medium text-lg pb-2">
      Hi there - Koga here
    </h2>
    <span className=" flex flex-col gap-y-2 text-[0.9rem] pb-5">
      <p className="">
        As an online marketing specialist, I thrive at the intersection of
        data-driven insights and creative flair. My mission? To elevate
        brands, engage audiences, and drive meaningful impact across
        digital channels.
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
        behavior. Each project I undertake is approached with a bespoke
        mindset, meticulously tailored to meet the unique objectives and
        preferences of my clients.
      </p>

      <p className="">
        Through a combination of strategic vision, innovative thinking,
        and relentless dedication, I strive to deliver measurable results
        that exceed expectations and propel brands toward sustained growth
        and success.
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
  </div>
  )
}

export default MobileAboutSection