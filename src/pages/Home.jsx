import Header from "../components/Header.jsx";
import CourseCard from "../components/CourseCard.jsx";
import Footer from "../components/Footer.jsx";
import HalfCard from "../components/HalfCard.jsx";
import Icons from "../components/Icons.jsx";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header pageTitle="Home" />

      {/* Hero */}
      <section className="p-16 home-hero">
        <h1 className="text-slate-700 xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-3xl font-bold text-wrap text-center tracking-wider">
          Welcome to{" "}
          <span className="text-cyan-700">Ames Figure Skating Club</span>!
        </h1>
        <div className="flex justify-center mt-8 lg:mt-16 gap-8 lg:gap-16">
          <Icons />
        </div>
        <h3 className="text-center mt-8 lg:mt-12 text-xl lg:text-2xl">
          Located at the Ames Ice Arena
        </h3>
        <h4 className="text-center text-base lg:text-lg text-cyan-600">
          <a href="https://maps.app.goo.gl/SatFhwJTmxKmt66E9" target="_blank">
            1507 Gateway Hills Park Drive Ames, Iowa
          </a>
        </h4>
      </section>

      {/* Course Catalog */}
      <section className="container mx-auto mt-8 mb-32 xl:max-w-[74rem] lg:max-w-[60rem] md:max-w-[45rem]">
        <h1 className="text-slate-200 text-center text-4xl font-semibold tracking-wide">
          Class Catalog
        </h1>
        <div className="my-8 grid row-auto grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          <CourseCard
            title="Snowplow Sam (L1-4)"
            description="Designed for children ages 3-6 with no prior skating experience to build confidence while learning the basic skills of skating."
          />
          <CourseCard
            title="Basic Classes (L1-6)"
            description="These levels introduce the fundamental moves of ice skating: forward and backward skating, stops, edges, crossovers, three turns, Mohawks and spins.  Basic 1 is for beginners and those with little experience and above the age of 6."
          />
          <CourseCard
            title="Freestyle Classes (1-6)"
            description="Introduction to more advanced figure skating skills. Skater must complete Pre-Freeskate to register."
          />
          <CourseCard
            title="​Adult Classes (L1-6)"
            description="Teen through senior citizens can enjoy learning beginner through advanced skills."
          />
          <CourseCard
            title="Hockey (L1-4)"
            description="Fundamentals of hockey to help maneuver faster and be more agile on the ice. All elements will be taught without sticks."
          />
          <CourseCard
            title="Adult Classes (L1-6)"
            description="Teen through senior citizens can enjoy learning beginner through advanced skills."
          />
        </div>
      </section>

      {/* Disclaimers */}
      <section className="container mx-auto my-8 mb-32 max-w-[70rem]">
        <h1 className="text-slate-200 font-semibold tracking-wide text-4xl text-center">
          Disclaimer
        </h1>
        <div className="grid grid-rows-1 grid-cols-2 place-items-center my-8">
          <HalfCard height={"h-96"} />
          <HalfCard height={"h-96"} />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
