import { useState } from "react";

import { Link } from "react-scroll";
import MobileAboutSection from "./components/MobileAboutSection";
import DesktopAboutSection from "./components/DesktopAboutSection";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import WSMAsection from "./components/WSMAsection";
import ClientsSection from "./components/ClientsSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

function App() {
  // const [nav, setNav] = useState(false);

  // const navLinks = [
  //   {
  //     id: 1,
  //     name: "home",
  //   },
  //   {
  //     id: 2,
  //     name: "about",
  //   },
  //   {
  //     id: 3,
  //     name: "clients",
  //   },
  //   {
  //     id: 4,
  //     name: "contact",
  //   },
  // ];
  // const [tagLine, seTagline] = useState("Elevating brands, one click at a time\n- Your digital success, my passion.");


  return (
    <>
      <div className=" ">
        <HomeSection />

        {/* <MobileAboutSection /> */}
        {/* <DesktopAboutSection /> */}

        <AboutSection />

        <WSMAsection />
        <ClientsSection />

        <ContactSection />

        <FooterSection />
      </div>
    </>
  );
}

export default App;
