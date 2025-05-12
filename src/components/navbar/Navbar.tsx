import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import InterpolatedText from '@/InterpolatedText';
import './Navbar.scss';
import './NavbarResponsive.scss';

const Navbar: React.FC = () => {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" onClick={closeMenu}>
          <InterpolatedText template="{{ APP.TITLE }}" />
        </Link>
      </div>

      <div className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        <ul>
          {/* Főoldal és Játék */}
          <li onClick={closeMenu}>
            <Link to="/">
              <InterpolatedText template="{{ NAV.HOME }}" />
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/game">
              <InterpolatedText template="{{ NAV.GAME }}" />
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/rules">
              <InterpolatedText template="{{ NAV.RULES }}" />
            </Link>
          </li>

          {/* Felhasználói oldalak */}
          <li onClick={closeMenu}>
            <Link to="/login">
              <InterpolatedText template="{{ NAV.LOGIN }}" />
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/register">
              <InterpolatedText template="{{ NAV.REGISTER }}" />
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link to="/profile">
              <InterpolatedText template="{{ NAV.PROFILE }}" />
            </Link>
          </li>

          {/* Általános oldalak */}
          <li onClick={closeMenu}>
            <Link to="/about">
              <InterpolatedText template="{{ NAV.ABOUT }}" />
            </Link>
          </li>
        </ul>

        <div className="navbar__lang">
          <button onClick={() => changeLanguage('hu')}>HU</button>
          <button onClick={() => changeLanguage('en')}>EN</button>
        </div>
      </div>

      {/* Hamburger ikon mobil nézethez */}
      <div className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
    </nav>
  );
};

export default Navbar;