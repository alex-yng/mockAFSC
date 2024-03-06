import { useState, useEffect } from "react";
import { disableScroll } from "../App.jsx";
import Header from "../components/Header.jsx";
import NavLink from "../components/NavLink.jsx";

export default function About() {
  const [aboutImgs, setAboutImgs] = useState([]);

  // Check if mobileNav is open
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  // Keep track of mobile nav opacity
  const [opacity, setOpacity] = useState("opacity-0");

  // Toggle the mobile nav by inverting the state and toggle disabelScroll
  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => !prev);
    disableScroll();
  };

  async function fetchData(url) {
    const data = await fetch(url);
    const res = await data.json();

    let keys = Object.keys(res.aboutImgs);

    let newImgs = [];
    for (let key of keys) {
      newImgs.push(res.aboutImgs[key]);
    }

    setAboutImgs(newImgs);
  }

  useEffect(() => {
    // content.json hosted through jsonSilo so it works on vercel production build.
    // replace URL with "/src/data.json" to test locally without public API.
    // can also open the link and verify the JSON shape
    fetchData(
      "https://api.jsonsilo.com/public/47e4d214-887d-4e46-9cd0-c79d2efb7b1d"
      // "/src/data.json"
    );
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

      <section className=" container flex flex-wrap mt-10">
        <div className="grid grid-cols-2 grid-rows-1 row items-start ml-10 place-items-center ">
          <div className="grid grid-cols-1 grid-rows-none justify-start lg:w-full ">
            <div>
              <h1 className="text-3xl font-semibold text-slate-200 font-sans">
                About Us
              </h1>
              <div className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 bg-slate-200  mx-auto m-4 mr-16">
                <p className="font-normal text-xl m-2">
                  The Ames Figure Skating Club is located at the Ames/ISU Ice
                  Arena, 1507 Gateway Hills Park Drive in Ames, Iowa. We provide
                  skaters of all ages and abilities many opportunities through
                  our Learn to Skate program along with the option of joining
                  AFSC and taking their skating to higher levels of skill and
                  enjoyment. Ames Figure Skating Club is dedicated to providing
                  a safe, fun and supportive environment for skaters of all ages
                  and abilities to achieve their skating goals.
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-slate-200 font-sans items-start">
                Fall/Winter Events:
              </h1>
              <div className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 bg-slate-200  mx-auto m-4 mr-16 ">
                <p className="font-normal text-2xl m-2">
                  <em className=" font-semibold text-2xl">
                    ​Fall Kickoff Celebration & Breakfast
                  </em>
                  -<br /> This event is held in the fall as a chance to kick off
                  our new skating season. <br />
                  All club members are encouraged to attend.
                  <br />
                  During this event, we will review ice etiquette and ice
                  monitor responsibilities as well as review club committees.
                  <br />
                  <br />
                  <em className=" font-semibold text-2xl">
                    Cyclone Championship
                  </em>
                  |<br /> Early November
                  <br />
                  <br />
                  <em className=" font-semibold text-2xl">Holiday Gala</em>|
                  <br /> Mid-December - This annual event is held to honor the
                  holiday season.
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-semibold text-slate-200   font-sans">
                Spring Events:
              </h1>
              <div className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 bg-slate-200  mx-auto m-4 mr-16">
                <p className="font-normal text-2xl m-2">
                  <em className="font-semibold text-2xl">
                    Great to Skate Event{" "}
                  </em>
                  | <br />
                  Beginning of January - This annual event is to celebrate
                  national skating month.
                  <br />
                  It is free admission and skate rental for everyone!
                  <br />
                  <br />
                  <em className="font-semibold text-2xl">Spring Show</em> |{" "}
                  <br />
                  End of April - This annual event is held in the Spring each
                  year and is a true ice production that
                  <br />
                  features all of our Club Skaters as well as Learn to Skate
                  skaters.
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-semibold text-slate-200  font-sans">
                Summer Events:
              </h1>
              <div className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 bg-slate-200  mx-auto m-4 mr-16">
                <p className="font-normal text-2xl m-2">
                  <em className="font-semibold text-2xl">Summer Camps</em> |{" "}
                  <br />
                  June & July - Summer camps offered through AFSC is a chance
                  for skaters to continue their skating
                  <br />
                  pursuits during the summer season. Skating is offered for all
                  levels and is typically in the evening with both on and
                  <br />
                  off-ice opportunities.
                  <br />
                  <br />
                  <em className="font-semibold text-2xl">Iowa Games</em> |{" "}
                  <br />
                  End of July - We host the annual Iowa Games competition.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 ml-auto items-end">
            <div>
              <h1 className="text-3xl font-semibold text-slate-200 ml-5 font-sans">
                Become a Member!
              </h1>
              <div className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 bg-slate-200  mx-auto m-4 ml-5 mr-10">
                <p className="font-normal text-xl m-2">
                  Becoming a member of AFSC enables a skater to participate in
                  U.S Figure Skating events, including competitions and test
                  sessions. Skaters can participate in all AFSC sponsored
                  events, such as the ice show, Holiday Gala, and MORE! Members
                  have access to purchase club ice. This ice time is designated
                  for private lessons, small group lessons, and individual
                  practice. Lastly, you will be able to share in the sport of
                  figure skating with others and form lifelong friendships.
                </p>
              </div>
            </div>
            <div className=" lg:w-full flex flex-col max-w-[80%] space-x-28">
              {aboutImgs.map((img) => {
                return (
                  <div
                    key={Math.random() * 2178412}
                    className=" mx-auto m-4 ml-5 mr-10 flex flex-col  place-items-center   "
                  >
                    <img src={img.url} alt={img.alt} />
                    <p className="text-slate-200 font-extralight">
                      {img.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1>
          <br />
        </h1>
      </section>
    </>
  );
}
