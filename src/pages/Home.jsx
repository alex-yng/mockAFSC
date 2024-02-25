import Header from "../components/Header.jsx";
import ImgCard from "../components/ImgCard.jsx";
import Footer from "../components/Footer.jsx";
import HalfCard from "../components/HalfCard.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header pageTitle="Home" />

      {/* Hero */}
      <section className="bg-slate-300 p-16">
        <h1 className="text-slate-700 text-8xl font-bold text-wrap text-center">
          Welcome to{" "}
          <span className="text-cyan-700">Ames Figure Skating Club</span>!
        </h1>
        <div className="flex justify-center mt-16 gap-4">
          <a
            href="https://www.facebook.com/Ames-Figure-Skating-Club-141594889200004/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="2x"
              className="hover:text-blue-600 transition hover:-translate-y-2 duration-300"
            />
          </a>
          <a href="https://twitter.com/AmesFigureSkate" target="_blank">
            <FontAwesomeIcon
              icon={faTwitter}
              size="2x"
              className="hover:text-blue-400 transition hover:-translate-y-2 duration-300"
            />
          </a>
          <a href="https://www.instagram.com/ames_fsc/" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              className="hover:text-rose-400 transition hover:-translate-y-2 duration-300"
            />
          </a>
        </div>
      </section>

      {/* Course Catalog */}
      <section className="container mx-auto mt-8 mb-32 lg:max-w-[70rem] md:max-w-[45rem]">
        <h1 className="text-slate-200 text-center text-4xl font-semibold tracking-wide">
          Class Catalog
        </h1>
        <div className="my-8 grid row-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          <ImgCard description="hello world" />
          <ImgCard />
          <ImgCard />
          <ImgCard />
          <ImgCard />
          <ImgCard />
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
