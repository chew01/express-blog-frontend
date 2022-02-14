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
        <h1 className="p-4 text-slate-100 text-3xl">Code Musings</h1>
        <button
          type="button"
          className="p-1 m-4 text-slate-100 border-2 rounded-lg focus:bg-slate-500"
          onClick={toggleMenu}
          onBlur={closeMenu}
        >
          <HiMenu />
        </button>
      </div>

      {menuOpen ? (
        <nav className="fixed bg-slate-700 w-screen">
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
