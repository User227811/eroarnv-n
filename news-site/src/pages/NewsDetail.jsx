import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNews } from "../data.js";

export default function NewsDetail() {
  const { id } = useParams();
  const { news, loading, error } = useNews();
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (!loading && !error) {
      const foundItem = news.find((n) => String(n.id) === id);
      setItem(foundItem || null);
    }
  }, [id, news, loading, error]);

  if (loading) {
    return <p>Загрузка новости...</p>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  if (!item) {
    return <p>Новость не найдена</p>;
  }

  return (
    <article className="news-detail">
      <h1>{item.title}</h1>
      <p className="meta">
        {item.date} • {item.author}
      </p>
      <img src={item.image} alt={item.title} className="detail-img" />
      <p>{item.excerpt}</p>
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        Читать оригинал
      </a>
    </article>
  );
}
