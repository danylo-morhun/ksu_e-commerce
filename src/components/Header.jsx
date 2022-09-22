import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header__left">
        <Link to="/">
          <div className="header__logo">
            <img
              width={100}
              height={100}
              src="img/main_logo.svg"
              alt="Логотип"
            />
          </div>
        </Link>
        <ul className="header__nav">
          <Link to="/">
            <li>CATEGORIES</li>
          </Link>
          <li>CONTACTS</li>
          <li>FAQ</li>
        </ul>
      </div>
      <ul className="header__auth">
        <li>SIGN IN</li>
        <li>SIGN UP</li>
      </ul>
    </header>
  );
}
