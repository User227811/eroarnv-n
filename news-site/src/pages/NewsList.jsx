import React from "react";
import { Link } from "react-router-dom";
import { useNews } from "../data.js";
import NewsCard from "../components/NewsCard.jsx";

export default function NewsList() {
  const { news, loading, error } = useNews();

  if (loading) {
    return <p>Загрузка новостей...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  return (
    <section className="news-list">
      <h2>Последние новости</h2>
      <div className="grid">
        {news.map((n) => (
          <NewsCard key={n.id} item={n}>
            <Link to={`/news/${n.id}`} className="read-more">
              Читать далее
            </Link>
          </NewsCard>
        ))}
      </div>
    </section>
  );
}
