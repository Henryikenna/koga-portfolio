import React from 'react'
import { Link } from "react-scroll";

const DesktopAboutSection = () => {
  return (
    <>
    <div className="hidden justify-center items-center h-dvh lg:flex">
          <div className="max-w-screen-lg mx-auto">
            <div name="about" className="px-10 justify-between md:flex">
              <h2 className="text-orange-300 font-medium text-2xl w-1/3">
                Hi there - Koga here
              </h2>
              <section className="flex flex-col w-2/3">
                <span className="flex flex-col gap-y-2 text-[1.1rem] pb-5">
                  <p>
                    As an online marketing specialist, I thrive at the
                    intersection of data-driven insights and creative flair. My
                    mission? To elevate brands, engage audiences, and drive
                    meaningful impact across digital channels.
                  </p>

                  <p>
                    Driven by an unwavering passion for the dynamic realm of
                    marketing, I have cultivated expertise in developing and
                    implementing strategies that resonate deeply with target
                    audiences.
                  </p>

                  <p>
                    My commitment to excellence is underscored by a meticulous
                    attention to detail and a profound understanding of consumer
                    behavior. Each project I undertake is approached with a
                    bespoke mindset, meticulously tailored to meet the unique
                    objectives and preferences of my clients.
                  </p>

                  <p>
                    Through a combination of strategic vision, innovative
                    thinking, and relentless dedication, I strive to deliver
                    measurable results that exceed expectations and propel
                    brands toward sustained growth and success.
                  </p>
                </span>

                <button
                  className="bg-orange-500 text-white uppercase px-4 py-3 rounded-full text-sm w-fit font-medium cursor-pointer md:text-base"
                  href=""
                >
                  <Link to="contact" smooth duration={500}>
                    Let's Chat
                  </Link>
                </button>
              </section>
            </div>
          </div>
        </div>
    </>
  )
}

export default DesktopAboutSection