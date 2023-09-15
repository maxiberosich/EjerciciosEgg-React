import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../img/LogoMCB.png";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="icon">
        <img src={LogoImg} alt="Logo" />
      </Link>
      <nav>
        <Link to="/">Productos</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>
    </header>
  );
}
