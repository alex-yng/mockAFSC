import { useState, useEffect } from "react";
import { disableScroll } from "../App.jsx";
import Header from "../components/Header.jsx";
import CourseCard from "../components/CourseCard.jsx";
import Footer from "../components/Footer.jsx";
import HalfCard from "../components/HalfCard.jsx";
import Icons from "../components/Icons.jsx";
import NavLink from "../components/NavLink.jsx";

// Home Page
export default function Home() {
  // Keep track of all cards that need to be generated
  const [cardInfos, setCardInfos] = useState([]);
  // Check if images for cards are loaded
  const [isLoaded, setIsLoaded] = useState(false);
  // Check if mobileNav is open
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  // Keep track of mobile nav opacity
  const [opacity, setOpacity] = useState("opacity-0");

  // Toggle the mobile nav by inverting the state and toggle disabelScroll
  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => !prev);
    disableScroll();
  };

  // On page load, fetch relevant content from JSON
  useEffect(() => {
    // content.json hosted through jsonSilo so it works on vercel production build.
    // replace URL with "/src/content.json" to test locally without public API.
    // can also open the link and verify the JSON shape
    fetch(
      "https://api.jsonsilo.com/public/47e4d214-887d-4e46-9cd0-c79d2efb7b1d"
      // "/src/content.json"
    )
      .then((response) => response.json())
      .then((content) => {
        // Get keys of content.classImgs into array
        let keys = Object.keys(content.classImgs);
        // Iterate through the individual imgs of classImgs and add to new array
        let newItems = [];
        for (let key of keys) {
          newItems.push(content.classImgs[key]);
        }
        // Avoid rerendering by adding all new images at once
        setCardInfos(newItems);
      })
      .then(() => {
        // Allow rest of page to be loaded
        setIsLoaded(true);
      });
  }, []);

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

      {/* Hero */}
      <section className="p-16 home-hero md:h-[90vh] grid place-items-center">
        <div className="animate-fadeIn">
          <h1 className="text-slate-700 xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-3xl font-bold text-wrap text-center tracking-wider xl:px-48npm animate-slideDown">
            Welcome to{" "}
            <span className="text-cyan-700">Ames Figure Skating Club</span>!
          </h1>
          <div className="animate-[slideUp_1.4s]">
            <div className="flex justify-center mt-2 md:mt-8 lg:mt-16 gap-4 md:gap-8 lg:gap-16">
              <Icons />
            </div>
            <h3 className="text-center mt-2 md:mt-8 lg:mt-12 text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              Located at the Ames Ice Arena
            </h3>
            <h4 className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-cyan-600 hover:text-cyan-900 transition-colors duration-300">
              <a
                href="https://maps.app.goo.gl/SatFhwJTmxKmt66E9"
                target="_blank"
              >
                1507 Gateway Hills Park Drive Ames, Iowa
              </a>
            </h4>
          </div>
        </div>
      </section>

      {/* Check if json is fetched yet, then load the rest of the page */}
      {isLoaded && (
        <div>
          {/* Course Catalog */}
          <section className="container mx-auto min-h-[40rem] my-16 xl:max-w-[80rem] lg:max-w-[70rem] md:max-w-[45rem] animate-fadeIn">
            <div className="flex flex-col gap-4 lg:gap-8">
              <h1 className="text-slate-200 text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold tracking-wide">
                Class Catalog
              </h1>
              <div className="m-8 grid row-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 place-items-center">
                {/* Map through cardInfo array to display each Card from JSON */}
                {cardInfos.map((cardInfo) => {
                  return (
                    <CourseCard
                      img={cardInfo.url}
                      title={cardInfo.title}
                      description={cardInfo.description}
                      key={Math.random() * 23178412}
                    />
                  );
                })}
              </div>
            </div>
            {/* Disclaimers */}
            <div className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 bg-slate-200 w-11/12 mx-auto">
              <h1 className=" text-2xl font-medium text-red-800">Disclaimers</h1>
              <p className="font-medium">Deadline to Register: Day before session starts<br />

                Additional Information: If registrations are low, class levels may be combined. No makeup lessons. Dates subject to change due to ice availability.<br />

                There is a 5% processing fee if you pay with your credit card.</p>
            </div>
          </section>

          
          

          <section className="my-8 mb-32 bg-white p-8">
            <div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 place-items-center my-8 gap-8">
              <div>
                <h1 className="my-2 text-slate-700 font-semibold tracking-wide text-4xl">
                  Register Now!
                </h1>
                {/* create different register buttons for each class. they will all open to the register page, which will have user fill out 
                information. we can include the register page or not idc
                this keeps the registering less confusing and more organized for the AFSC to see numbers on who is
                signing up for what */}
                <HalfCard height={"h-96"} />
              </div>
              <div>
                <h1 className="my-2 text-slate-700 font-semibold tracking-wide text-4xl">
                  {/* there is currently only one session running, so that is the only one we will include.  
                  it is called "session 4", it is 6 weeks long, once a week, on either wednesdays, fridays, or saturdays
                  wednesday is from 6:30-7pm; friday is from 5:00-5:30pm; saturday is 9:00-9:30am
                  Wednesday's:  February 28th; March 6th, 20th, 27th; April 3rd & 10th

                  Friday's: March 1st, 8th, 22nd, 29th; April 5th & 12th

                  Saturday's: March 2nd, 9th, 23rd, 30th; April 6th & 13th*/}
                  Open:
                </h1>
                <div className="min-w-96 md:min-w-[40rem] lg:min-w-[30rem] xl:min-w-[38rem] mb-8 lg:mb-16 bg-slate-200 rounded-lg shadow-lg h-96">
                  <h1 className="font-extrabold font-serif text-center text-4xl">
                    Session 4
                  </h1>
                  <h2 className=" font-semibold font-sans text-center text-xl">
                    6 weeks long, Wednesdays, Fridays, or Saturdays
                  </h2>
                  <br></br>
                  <h3 className=" font-normal font-sans text-left text-lg indent-3">
                    Wednesday's from 6:30-7:00pm:{" "}
                  </h3>
                  <h3 className="indent-3">
                    Feburary 28th, March 6th, March 20th, March 27th, April 3rd,
                    April 10th
                  </h3>
                  <br></br>
                  <h4 className=" font-normal font-sans text-left text-lg indent-3">
                    Friday's from 5:00-5:30pm:{" "}
                  </h4>
                  <h4 className="indent-3">
                    March 1st, March 8th, March 22nd, March 29th, April 5th,
                    April 12th
                  </h4>
                  <br></br>
                  <h5 className=" font-normal font-sans text-left text-lg indent-3">
                    Saturday's from 9:00-9:30am:{" "}
                  </h5>
                  <h5 className="indent-3">
                    March 2nd, March 9th, March 23rd, March 30th, April 6th,
                    April 13th
                  </h5>
                  <br></br>
                  <br></br>
                  <h6 className="font-sans indent-3 font-semibold text-red-400">
                    *More Sessions Will Open Up Closer to Start Date*
                  </h6>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}
