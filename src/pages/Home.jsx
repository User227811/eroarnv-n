import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <h1>Добро пожаловать в наш новостной сайт</h1>
      <p>
        Свежее обновление новостей каждый день. Читайте, делитесь и находите
        интересное.
      </p>
      <div className="cta">
        <Link to="/news" className="button">
          Перейти к новостям
        </Link>
        <Link to="/about" className="button ghost">
          О проекте
        </Link>
      </div>
    </section>
  );
}
