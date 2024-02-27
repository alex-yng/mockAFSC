export default function HalfCard({ height }) {
  const defaultStyles =
    "min-w-96 md:min-w-[40rem] lg:min-w-[30rem] xl:min-w-[40rem] mb-8 lg:mb-16 bg-slate-200 rounded-lg shadow-lg";

  return (
    <>
      <div className={`${defaultStyles} ${height}`}></div>
    </>
  );
}
