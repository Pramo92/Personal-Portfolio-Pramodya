import { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src={logo} alt="logo" />

          <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            &#9776;
          </div>

          <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
            <li onClick={closeMenu}>
              <a href="#home" className="menu-items">Home</a>
            </li>
            <li onClick={closeMenu}>
              <a href="#about" className="menu-items">About</a>
            </li>
            <li onClick={closeMenu}>
              <a href="#skills" className="menu-items">Skills</a>
            </li>
            <li onClick={closeMenu}>
              <a href="#projects" className="menu-items">Projects</a>
            </li>
            <li onClick={closeMenu}>
              <a href="#contact" className="menu-items">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
