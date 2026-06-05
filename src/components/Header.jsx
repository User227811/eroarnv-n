import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <h1 className="logo">NewsSite</h1>
        <nav className="nav">
          <Link to="/">Главная</Link>
          <Link to="/news">Новости</Link>
          <Link to="/about">О нас</Link>
        </nav>
      </div>
    </header>
  );
}
