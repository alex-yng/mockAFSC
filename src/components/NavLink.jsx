export default function NavLink({ path, text }) {
  return (
    <div className="group">
      <a
        href={path}
        className="text-slate-500 hover:text-cyan-700 text-lg hover:-translate-y-2 lg:hover:text-2xl transition-all duration-300"
      >
        {text}
      </a>
      <hr className="border-black w-0 group-hover:w-full transition-all duration-500"></hr>
    </div>
  );
}
