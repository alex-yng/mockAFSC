import { useState } from "react";
import { disableScroll } from "../App.jsx";
import Header from "../components/Header.jsx";
import NavLink from "../components/NavLink.jsx";
import Footer from "../components/Footer.jsx";

export default function Creators() {
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
        className={`bg-slate-100 w-screen absolute z-10 origin-top grid place-items-center shaow-xl ${
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

      {/* Content */}
      <main className="flex flex-col bg-slate-900 lg:grid lg:grid-cols-2">
        {/* Person 1 */}
        <div className="bg-slate-800 animate-slideRight grid place-items-center">
          <div className="flex lg:flex-col lg:mt-0 justify-center items-center lg:items-start p-8 lg:p-16 gap-8 xl:gap-16 sm:max-w-[80%] lg:max-w-full">
            <h1 className="text-slate-200 text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-medium tracking-wide">
              Alex
              <br />
              Young
            </h1>
            <p className="text-slate-300 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              I am an ambitious software developer and student with experience
              in languages like Java, Python, C#, HTML/CSS/Javascript,
              technologies like React, TailwindCSS, as well as leadership roles
              and undergraduate research. I also love 319!<br />
              <p className="text-xs">Class: SE/ComS319 Construction of User Interfaces, Spring 2024<br />
              Email: alexy@iastate.edu <br />
              Date: March 6 2024</p>

            </p>
          </div>
        </div>
        <div className="grid place-items-center animate-[slideLeft_1.3s] p-8 sm:p-12 md:p-16 lg:p-0">
          <img
            className="size-64 sm:size-80 md:size-96 lg:size-full rounded-2xl lg:rounded-none hover:scale-110 opacity-80 hover:opacity-100 lg:hover:scale-100 transition-[transform,opacity] duration-500"
            src="/myotherimages/alexPFP.jpg"
          />
        </div>

        {/* Person 2 */}
        <div className="lg:hidden bg-slate-800 animate-[slideRight_1.5s] grid place-items-center">
          <div className="flex lg:flex-col justify-center items-center lg:items-start p-8 lg:p-16 gap-8 xl:gap-16 sm:max-w-[80%] lg:max-w-full">
            <h1 className="text-slate-200 text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-medium tracking-wide">
              Kaylee
              <br />
              Maczek
            </h1>
            <p className="text-slate-300 text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
            I am studying at Iowa State University, with a Computer Science
              major and a minor in Cybersecurity Engineering. I have extensive
              experience with HTML, Javascript, Java, CSS, React, and
              TailwindCSS. I am participating in leadership and research as
              well.<br />
              <p className="text-xs ">Class: SE/ComS319 Construction of User Interfaces, Spring 2024<br />
              Email: kaylee53@iastate.edu <br />
              Date: March 6 2024</p>
            </p>
          </div>
        </div>
        <div className="grid place-items-center animate-[slideLeft_1.7s] lg:animate-[slideRight_1.5s] p-8 sm:p-12 md:p-16 lg:p-0">
          <img
            className="size-64 sm:size-80 md:size-96 lg:size-full rounded-2xl lg:rounded-none hover:scale-110 opacity-80 hover:opacity-100 lg:hover:scale-100 transition-[transform,opacity] duration-500"
            src="/myotherimages/kayleePFP.jpg"
          />
        </div>
        <div className="hidden bg-slate-800 animate-[slideLeft_1.7s] lg:grid place-items-center">
          <div className="flex lg:flex-col justify-center items-center lg:items-start p-8 lg:p-16 gap-8 xl:gap-16">
            <h1 className="text-slate-200 text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-medium tracking-wide">
              Kaylee
              <br />
              Maczek
            </h1>
            <p className="text-slate-300 text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              I am studying at Iowa State University, with a Computer Science
              major and a minor in Cybersecurity Engineering. I have extensive
              experience with HTML, Javascript, Java, CSS, React, and
              TailwindCSS. I am participating in leadership and research as
              well.<br />
              <p className="text-xs ">Class: SE/ComS319 Construction of User Interfaces, Spring 2024<br />
              Email: kaylee53@iastate.edu <br />
              Date: March 6 2024</p>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
