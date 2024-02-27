// Header / Navbar used for each page
import NavLink from "./NavLink.jsx";

export default function Header() {
  return (
    <header className="py-4 header-background">
      <div className="container mx-auto flex sm:justify-between justify-around items-center">
        {/* Div for Logo and Site Name */}
        <div className="flex items-center gap-4">
          <img className="size-16" src="/afscLogo.jpg" />
          <h1 className="text-slate-500 text-base sm:text-lg lg:text-2xl font-semibold tracking-wide">
            AFSC
          </h1>
        </div>
        {/* Navigation; Support for several links if needed */}
        <nav className="space-x-4">
          <NavLink path="/home" text="Home" />
          <NavLink path="/about" text="About" />
          <NavLink path="/creators" text="Creators" />
        </nav>
      </div>
    </header>
  );
}
