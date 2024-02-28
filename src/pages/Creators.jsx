import HalfCard from "../components/HalfCard.jsx";
import Header from "../components/Header.jsx";

export default function Creators() {
  return (
    <>
      <Header />
      <div className="flex mx-auto mt-32 justify-center items-center gap-16 shrink-0">
        <HalfCard height="h-[40rem]" />
        <HalfCard height="h-[40rem]" />
      </div>
    </>
  );
}
