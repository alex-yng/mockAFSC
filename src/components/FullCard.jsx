export default function FullCard({
  img = "https://fakeimg.pl/400x400",
  description = "",
}) {
  return (
    <>
      {/* Main Card */}
      <div className="min-w-fit xl:min-w-full bg-slate-200 rounded-3xl shadow-lg flex flex-col xl:flex-row justify-around p-4 xl:flex-nowrap items-center">
        <div className="flex-shrink min-w-0 max-w-[60ch] overflow-hidden">
          <p className="text-justify px-4 text-2xl font-light">{description}</p>
        </div>
        <div className="flex-shrink-0 mb-4 xl:mb-0">
          <img className="h-full" src={img} alt="Image" />
        </div>
      </div>
    </>
  );
}
