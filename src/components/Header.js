import React from "react";
// import "./Header.css";
function Header() {
  return (
    <header className="d-flex" justify-content-center>
      <h1>AdoptEV</h1>
      <input type="text" placeholder="Search.." />
      <nav>
        <ul className="navLinks">
          <li>
            <a href="#">Finance</a>
          </li>
          <li>
            <a href="#">Partner With Us</a>
          </li>
        </ul>
      </nav>
      <a className="login">
        <button className="button">Login</button>
      </a>
    </header>
  );
}

export default Header;
