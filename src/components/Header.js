import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-secondary shadow-lg">
      {/* Logo */}
      <a className="font-bold text-white text-2xl tracking-wide" href="/">
        M Kathirvel
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8 text-white font-medium">
          <li><a className="hover:text-primary transition-colors" href="#home">Home</a></li>
          <li><a className="hover:text-primary transition-colors" href="#about">About</a></li>
          <li><a className="hover:text-primary transition-colors" href="#project">Projects</a></li>
          <li><a className="hover:text-primary transition-colors" href="#resume">resume</a></li>
          <li><a className="hover:text-primary transition-colors" href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      {toggleMenu && (
        <nav className="absolute top-16 right-6 bg-secondary shadow-md rounded-lg p-4 md:hidden">
          <ul className="flex flex-col space-y-4 text-white font-medium">
            <li><a className="hover:text-primary transition-colors" href="#home">Home</a></li>
            <li><a className="hover:text-primary transition-colors" href="#about">About</a></li>
            <li><a className="hover:text-primary transition-colors" href="#project">Projects</a></li>
            <li><a className="hover:text-primary transition-colors" href="#resume">resume</a></li>
            <li><a className="hover:text-primary transition-colors" href="#contact">Contact</a></li>
          </ul>
        </nav>
      )}

      {/* Menu Toggle Button */}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="block md:hidden"
      >
        <Bars3Icon className="text-white h-7 w-7" />
      </button>
    </header>
  );
}
