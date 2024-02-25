export default function HalfCard({ height }) {
  const defaultStyles = "w-11/12 bg-slate-200 rounded-lg shadow-lg";

  return (
    <>
      <div className={`${defaultStyles} ${height}`}></div>
    </>
  );
}
