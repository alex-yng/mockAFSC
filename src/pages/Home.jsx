import { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import CourseCard from "../components/CourseCard.jsx";
import Footer from "../components/Footer.jsx";
import HalfCard from "../components/HalfCard.jsx";
import Icons from "../components/Icons.jsx";

// Home Page
export default function Home() {
  // Keep track of all cards that need to be generated
  const [cardInfos, setCardInfos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

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
        // Get every value inside content.courseImgs keys, and store it in img as an array
        const img = Object.values(content.courseImgs);
        // Update cardInfos to the new array
        setCardInfos(img);
      })
      .then(setIsLoaded(true));
  }, []);

  return (
    <>
      {/* Header */}
      <Header pageTitle="Home" />

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

      {/* Course Catalog */}
      {/* Check if json is fetched yet, then load the rest of the page */}
      {isLoaded && (
        <>
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
                    />
                  );
                })}
              </div>
            </div>
          </section>

          {/* Disclaimers */}
          <section className="my-8 mb-32 bg-white p-8">
            <div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 place-items-center my-8 gap-8">
              <div>
                <h1 className="my-2 text-slate-700 font-semibold tracking-wide text-4xl">
                  Register Now!
                </h1>
                <HalfCard height={"h-96"} />
              </div>
              <div>
                <h1 className="my-2 text-slate-700 font-semibold tracking-wide text-4xl">
                  Open:
                </h1>
                <HalfCard height={"h-96"} />
              </div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </>
      )}
    </>
  );
}
