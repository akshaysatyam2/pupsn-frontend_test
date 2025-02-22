import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white p-4 fixed w-full top-0 shadow-md">
      <div className="flex justify-between items-center">
        <img src="/media/logos/logo1.png" alt="PupsN Logo" className="h-12" />
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl">
          ☰
        </button>
        <nav className={`md:flex space-x-4 ${menuOpen ? "block" : "hidden"}`}>
          <Link href="/">Home</Link>
          <Link href="/features">Features</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/subscribe">Subscribe</Link>
        </nav>
      </div>
    </header>
  );
}
