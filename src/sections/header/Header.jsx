import { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive((prev) => !prev);
  };

  return (
    <header>
      <a href="/" className="brand">
        <h1>
          Obaji<span>Festival</span>
        </h1>
      </a>
      <nav>
        <ul className={`${active && "active"}`}>
          <li onClick={toggleMenu}>
            <a href="/#">Home</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="/about">About</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="/events">Events</a>
          </li>
          <li onClick={toggleMenu}>
            <a href="/blog">Blog</a>
          </li>

          <li onClick={toggleMenu}>
            <a href="/contact">Contact</a>
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
