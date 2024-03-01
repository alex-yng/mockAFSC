import HalfCard from "../components/HalfCard.jsx";
import Header from "../components/Header.jsx";

export default function Creators() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Content */}
      <main className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-slate-700 animate-slideRight">
          <div className="flex flex-col items-center p-8 lg:p-16">
            <h1 className="text-slate-200 text-9xl font-medium tracking-wide min-w-fit">
              Alex Young
            </h1>
            <p className="text-white text-2xl">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              nesciunt ex vel ratione quisquam rem ut officiis modi. Reiciendis
              esse eum obcaecati facere ducimus tempora minima quod odit amet
              eligendi.
            </p>
          </div>
        </div>
        <div className="grid place-items-center animate-[slideLeft_1.3s]">
          <img className="" src="https://fakeimg.pl/1200x1200" />
        </div>
        <div className="grid place-items-center animate-[slideRight_1.6s]">
          <img className="" src="https://fakeimg.pl/1200x1200" />
        </div>
        <div className="bg-slate-700 animate-[slideLeft_1.9s]">
          <div className="flex flex-col items-center p-8 lg:p-16">
            <h1 className="text-slate-200 text-5xl font-medium tracking-wider">
              Kaylee Maczek
            </h1>
          </div>
        </div>
      </main>
    </>
  );
}
