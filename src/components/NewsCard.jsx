import React from "react";
import { Link } from "react-router-dom";

export default function NewsCard({ item, children }) {
  return (
    <article className="card">
      <img src={item.image} alt="" className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-meta">
          {item.date} • {item.author}
        </p>
        <p className="card-excerpt">{item.excerpt}</p>
        {children}
      </div>
    </article>
  );
}
