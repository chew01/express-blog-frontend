import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = (e) => {
    if (!e.relatedTarget) setMenuOpen(false);
    else if (
      e.relatedTarget.id === 'aboutLink' ||
      e.relatedTarget.id === 'gitLink'
    )
      return;
    setMenuOpen(false);
  };

  return (
    <header className="bg-slate-700">
      <div className="flex justify-between items-center">
        <Link to="/">
          <h1 className="p-4 text-slate-100 text-3xl md:ml-24">Code Musings</h1>
        </Link>
        <button
          type="button"
          className="p-1 m-4 text-slate-100 border-2 rounded-lg focus:bg-slate-500 md:hidden"
          onClick={toggleMenu}
          onBlur={closeMenu}
        >
          <HiMenu />
        </button>
        <nav className="bg-slate-700 hidden md:flex self-stretch mr-5">
          <Link
            to="/about"
            className="p-5 text-slate-200 hover:bg-slate-600"
            id="aboutLink"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="p-5 text-slate-200 hover:bg-slate-600"
            id="projectLink"
          >
            Projects
          </Link>
          <a
            href="https://github.com/chew01/"
            className="p-5 text-slate-200 hover:bg-slate-600"
            id="gitLink"
          >
            Github
          </a>
        </nav>
      </div>

      {menuOpen ? (
        <nav className="fixed bg-slate-700 w-screen md:hidden">
          <ul>
            <li>
              <Link
                to="/"
                className="p-3 text-slate-200 block hover:bg-slate-600"
                id="homeLink"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="p-3 text-slate-200 block hover:bg-slate-600"
                id="aboutLink"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/links"
                className="p-3 text-slate-200 block hover:bg-slate-600"
                id="gitLink"
              >
                Github
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        ''
      )}
    </header>
  );
}

export default Header;
