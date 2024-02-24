import Header from "../components/Header.jsx";
import ImgCard from "../components/ImgCard.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header pageTitle="Home" />

      {/* Course Catalog */}
      <div className="container mx-auto mt-8 mb-32 max-w-[70rem]">
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
      </div>

      {/* Disclaimers */}
      <div className="container mx-auto my-8 mb-32 max-w-[70rem]">
        <h1 className="text-slate-200 font-semibold tracking-wide text-4xl text-center">
          Disclaimer
        </h1>
        <div className="grid grid-rows-1 grid-cols-2 place-items-center my-8">
          <ImgCard />
          <ImgCard />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
