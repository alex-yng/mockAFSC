export default function Header({ pageTitle }) {
  return (
    <header className="bg-slate-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-slate-500 text-2xl font-semibold">
          AFSC | {pageTitle}
        </h1>
        <nav className="space-x-4">
          <a href="/home" className="text-slate-500 hover:text-gray-400">
            Home
          </a>
          <a href="/about" className="text-slate-500 hover:text-gray-400">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
