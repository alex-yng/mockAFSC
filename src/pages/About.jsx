import { useState } from "react";
import { disableScroll } from "../App.jsx";
import Header from "../components/Header.jsx";
import NavLink from "../components/NavLink.jsx";

export default function About() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [opacity, setOpacity] = useState("opacity-0");

  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => !prev);
    disableScroll();
  };

  // disable dropdown menu
  setTimeout(() => {
    setOpacity("opacity-100");
  }, 1000);

  return (
    <>
      {/* Header */}
      <Header mobileNavOpen={mobileNavOpen} toggleMobileNav={toggleMobileNav} />
      <div
        className={`bg-white w-screen absolute z-10 origin-top grid place-items-center ${
          mobileNavOpen
            ? "h-[90vh] animate-expandDownward"
            : "h-0 animate-expandUpward"
        } ${opacity}`}
      >
        {mobileNavOpen && (
          <nav className={`flex flex-col gap-8`}>
            <NavLink path="/home" text="Home" />
            <NavLink path="/about" text="About" />
            <NavLink path="/creators" text="Creators" />
          </nav>
        )}
      </div>

      {/* "The Ames Figure Skating Club is located at the Ames/ISU Ice Arena, 1507 Gateway Hills Park Drive
       in Ames, Iowa. We provide skaters of all ages and abilities many opportunities through our Learn 
       to Skate program along with the option of joining AFSC and taking their skating to higher levels of 
       skill and enjoyment.   Ames Figure Skating Club is dedicated to providing a safe, fun and supportive 
       environment for skaters of all ages and abilities to achieve their skating goals." */}
    </>
  );
}
