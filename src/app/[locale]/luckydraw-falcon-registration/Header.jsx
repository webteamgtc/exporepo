"use client";

export default function Header() {
  return (
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 lg:px-0 py-4">
          <div className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
            Golden Falcon Awards
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <button className="hover:text-white transition">Home</button>
            <button className="hover:text-white transition">About</button>
            <button className="hover:text-white transition">Awards</button>
            <button className="hover:text-white transition">Schedule</button>
            <button className="hover:text-white transition">Contact</button>
          </nav>
        </div>
      </header>
  );
}

