import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import InterpolatedText from '../InterpolatedText';
import './Navbar.scss';
import './NavbarResponsive.scss';

const Navbar: React.FC = () => {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <InterpolatedText template="{{ APP.TITLE }}" />
      </div>

      <div className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={() => setMenuOpen(false)}>
            <InterpolatedText template="{{ NAV.HOME }}" />
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <InterpolatedText template="{{ NAV.RULES }}" />
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <InterpolatedText template="{{ NAV.ABOUT }}" />
          </li>
        </ul>
        <div className="navbar__lang">
          <button onClick={() => changeLanguage('hu')}>HU</button>
          <button onClick={() => changeLanguage('en')}>EN</button>
        </div>
      </div>

      <div className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;