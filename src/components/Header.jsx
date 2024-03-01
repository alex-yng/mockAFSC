// Header / Navbar used for each page
import NavLink from "./NavLink.jsx";

export default function Header({ mobileNavOpen, toggleMobileNav }) {
  return (
    <header className="py-4 bg-white h-[10vh]">
      <div className="container mx-auto flex sm:justify-between justify-around items-center">
        {/* Div for Logo and Site Name */}
        <div className="flex items-center gap-4">
          <a href="/home">
            <img className="size-16" src="/afscLogo.jpg" />
          </a>
          <h1 className="text-slate-500 text-base sm:text-lg lg:text-2xl font-semibold tracking-wide">
            AFSC (unofficial page)
          </h1>
        </div>

        {/* Navigation; Support for several links if needed */}
        <nav className="space-x-4 hidden md:inline">
          <NavLink path="/home" text="Home" />
          <NavLink path="/about" text="About" />
          <NavLink path="/creators" text="Creators" />
        </nav>

        {/* Mobile Nav */}
        <div
          className="size-5 sm:size-6 md:hidden hover:scale-125 transition-transform duration-500"
          onClick={toggleMobileNav}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
      </div>
    </header>
  );
}
