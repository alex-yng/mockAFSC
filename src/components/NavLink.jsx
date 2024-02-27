export default function NavLink({ path, text }) {
  return (
    <a
      href={path}
      className="text-slate-500 hover:text-cyan-700 text-lg hover:text-xl lg:hover:text-2xl transition-[font-size] duration-300"
    >
      {text}
    </a>
  );
}
