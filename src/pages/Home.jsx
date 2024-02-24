import Header from "../components/Header.jsx";
import ImgCard from "../components/ImgCard.jsx";

export default function Home() {
  return (
    <>
      <Header pageTitle="Home" />
      <div className="container mx-auto my-8">
        <h1 className="text-slate-200 text-center text-2xl font-extralight">
          Class Catalog
        </h1>
        <div className="my-8 grid row-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          <ImgCard />
          <ImgCard />
          <ImgCard />
          <ImgCard />
          <ImgCard />
          <ImgCard />
        </div>
      </div>
    </>
  );
}
