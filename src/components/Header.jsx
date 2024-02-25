export default function Header() {
  return (
    <header className="py-4 header-background">
      <div className="container mx-auto flex sm:justify-between justify-around items-center">
        <div className="flex items-center gap-4">
          <img className="size-16" src="/afscLogo.jpg" />
          <h1 className="text-slate-500 text-base sm:text-lg lg:text-2xl font-semibold tracking-wide">
            AFSC
          </h1>
        </div>
        <nav className="space-x-4">
          <a
            href="/home"
            className="text-slate-500 hover:text-cyan-700 hover:text-lg lg:hover:text-xl transition-[font-size] duration-300"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-slate-500 hover:text-cyan-700 hover:text-lg lg:hover:text-xl transition-[font-size] duration-300"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
