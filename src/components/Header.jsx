export default function Header() {
  return (
    <header className="bg-sky-100 py-4">
      <div className="container mx-auto flex sm:justify-between justify-around items-center">
        <h1 className="text-slate-500 text-2xl font-semibold tracking-wide">
          AFSC
        </h1>
        <nav className="space-x-4">
          <a
            href="/home"
            className="text-slate-500 hover:text-cyan-400 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-slate-500 hover:text-cyan-400 transition-colors duration-300"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
