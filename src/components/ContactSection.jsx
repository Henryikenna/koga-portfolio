import React from 'react'

const ContactSection = () => {
  return (
    <div
          name="contact"
          className="my-5 border h-dvh flex flex-col justify-center lg:items-center lg:flex-row lg:gap-20 lg:justify-center lg:my-0"
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
  )
}

export default ContactSection