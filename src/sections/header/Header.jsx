import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive((prev) => !prev);
  };

  return (
    <header className="header">
      <Link to="/" className="brand">
        <h1>Infobase</h1>
      </Link>
      <nav>
        <ul className={`${active && "active"}`}>
          <li onClick={toggleMenu}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/events">Events</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/blog">Blog</Link>
          </li>

          <li onClick={toggleMenu}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {/* Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${active && "active"}`}></div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
