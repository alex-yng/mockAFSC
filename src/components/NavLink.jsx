export default function NavLink({ path, text }) {
  return (
    <a
      href={path}
      className="text-slate-500 hover:text-cyan-700 text-xl hover:-translate-y-2 lg:hover:text-2xl transition duration-300"
    >
      {text}
    </a>
  );
}
