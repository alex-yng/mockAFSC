// CourseCard component which houses an image, title, and description
export default function CourseCard({
  img = "https://fakeimg.pl/700x400",
  title = "Course Title",
  description = "This is a default course description",
}) {
  return (
    <>
      {/* size-[20rem] md:size-[22rem] lg:size-[22rem] xl:size-[25rem] */}
      <div className="p-3 bg-slate-200 max-w-[20em] sm:max-w-[27em] lg:max-w-[40em] h-[30em] sm:h-[35em] md:h-[30em] lg:h-[35em] rounded-lg shadow-lg hover:scale-110 duration-[450ms]">
        <img className="p-2 aspect-[7/4]" src={img} />
        <div className="text-slate-700 mx-2">
          <h2 className="text-xl lg:text-3xl font-medium lg:tracking-wide mb-2">
            {title}
          </h2>
          <p className="text-base md:text-base lg:text-xl">{description}</p>
        </div>
      </div>
    </>
  );
}
