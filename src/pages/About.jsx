import { useState } from "react";
import { disableScroll } from "../App.jsx";
import Header from "../components/Header.jsx";
import NavLink from "../components/NavLink.jsx";

export default function About() {
  // Check if mobileNav is open
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  // Keep track of mobile nav opacity
  const [opacity, setOpacity] = useState("opacity-0");

  // Toggle the mobile nav by inverting the state and toggle disabelScroll
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
        className={`bg-slate-100 w-screen absolute z-10 origin-top grid place-items-center shadow-xl ${
          mobileNavOpen
            ? "h-[60vh] animate-expandDownward"
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
      <section className="container mx-auto min-h-[40rem] my-16 xl:max-w-[80rem] lg:max-w-[70rem] md:max-w-[45rem] animate-fadeIn ">
        <div className="flex col-span-2">
          <div>
            <h1 className="text-3xl font-semibold text-slate-200 font-sans">
              About Us
            </h1>
              <div className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 bg-slate-200  mx-auto m-4">
                <p className="font-normal text-xl m-2">
                The Ames Figure Skating Club is located at the Ames/ISU Ice Arena, 1507 Gateway Hills Park Drive
                in Ames, Iowa. We provide skaters of all ages and abilities many opportunities through our Learn 
                to Skate program along with the option of joining AFSC and taking their skating to higher levels of 
                skill and enjoyment.   Ames Figure Skating Club is dedicated to providing a safe, fun and supportive 
                environment for skaters of all ages and abilities to achieve their skating goals.
                </p>
              </div>
            </div>
          <div>
            <h1 className="text-3xl font-semibold text-slate-200 ml-5 font-sans">
             Become a Member!
            </h1>
              <div className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 bg-slate-200  mx-auto m-4 ml-5">
                <p className="font-normal text-xl m-2">
                Becoming a member of AFSC enables a skater to participate in U.S Figure Skating events, including competitions and test 
                sessions. Skaters can participate in all AFSC sponsored events, such as the ice show, Holiday Gala, and MORE! Members have
                access to purchase club ice. This ice time is designated for private lessons, small group lessons, and individual practice. 
                Lastly, you will be able to share in the sport of figure skating with others and form lifelong friendships. 
                </p>
              </div>
          </div>
        </div>
      </section>
      {/* "The Ames Figure Skating Club is located at the Ames/ISU Ice Arena, 1507 Gateway Hills Park Drive
       in Ames, Iowa. We provide skaters of all ages and abilities many opportunities through our Learn 
       to Skate program along with the option of joining AFSC and taking their skating to higher levels of 
       skill and enjoyment.   Ames Figure Skating Club is dedicated to providing a safe, fun and supportive 
       environment for skaters of all ages and abilities to achieve their skating goals." */}
    </>
  );
}
