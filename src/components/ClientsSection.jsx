import React from 'react';
import { RiDoubleQuotesL } from "react-icons/ri";

const ClientsSection = () => {
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
  )
}

export default ClientsSection