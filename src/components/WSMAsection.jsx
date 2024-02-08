import React from 'react';
import { PiStrategy } from "react-icons/pi";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { RiRefreshLine, RiSpeakLine } from "react-icons/ri";

const WSMAsection = () => {
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

  return (
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
  )
}

export default WSMAsection