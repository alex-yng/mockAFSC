import { disableScroll } from "../App.jsx";
import { useState } from "react";
import Header from "../components/Header.jsx";

export default function Creators() {
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

      {/* Content */}
      <main className="flex flex-col bg-slate-700 lg:grid lg:grid-cols-2">
        {/* Person 1 */}
        <div className="bg-slate-700 animate-slideRight grid place-items-center">
          <div className="flex lg:flex-col mt-8 md:mt-16 lg:mt-0 justify-center items-center lg:items-start px-8 lg:p-16 gap-8 xl:gap-16 sm:max-w-[80%] lg:max-w-full">
            <h1 className="text-slate-200 text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-medium tracking-wide">
              Alex
              <br />
              Young
            </h1>
            <p className="text-white text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              I am an ambitious software developer and student with experience
              in languages like Java, Python, C#, HTML/CSS/Javascript,
              technologies like React, TailwindCSS, as well as leadership roles
              and undergraduate research. I also love 319!
            </p>
          </div>
        </div>
        <div className="grid place-items-center animate-[slideLeft_1.3s] p-8 sm:p-12 md:p-16 lg:p-0">
          <img
            className="size-64 sm:size-80 md:size-96 lg:size-full rounded-2xl lg:rounded-none"
            src="/alexPFP.jpg"
          />
        </div>

        {/* Person 2 */}
        <div className="lg:hidden bg-slate-700 animate-[slideRight_1.5s]">
          <div className="flex lg:flex-col justify-center items-center lg:items-start p-8 lg:p-16 gap-8 xl:gap-16">
            <h1 className="text-slate-200 text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-medium tracking-wide">
              Kaylee
              <br />
              Maczek
            </h1>
            <p className="text-white text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
              ipsam, similique dolore, optio labore praesentium ab libero
              aliquid animi reprehenderit minima amet adipisci neque sunt natus
              error laborum eveniet maiores!
            </p>
          </div>
        </div>
        <div className="grid place-items-center animate-[slideLeft_1.7s] lg:animate-[slideRight_1.5s] p-8 sm:p-12 md:p-16 lg:p-0">
          <img
            className="size-64 sm:size-80 md:size-96 lg:size-full rounded-2xl lg:rounded-none"
            src="https://fakeimg.pl/1200x1200"
          />
        </div>
        <div className="hidden bg-slate-700 animate-[slideLeft_1.7s] lg:grid place-items-center">
          <div className="flex lg:flex-col justify-center items-center lg:items-start p-8 lg:p-16 gap-8 xl:gap-16">
            <h1 className="text-slate-200 text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-medium tracking-wide">
              Kaylee
              <br />
              Maczek
            </h1>
            <p className="text-white text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
              ipsam, similique dolore, optio labore praesentium ab libero
              aliquid animi reprehenderit minima amet adipisci neque sunt natus
              error laborum eveniet maiores!
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
