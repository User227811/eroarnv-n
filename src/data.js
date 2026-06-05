// src/data.js
import { useState, useEffect } from "react"

const apiKey = import.meta.env.VITE_API_KEY 
const apiUrl = `https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}&language=ru&sortBy=relevancy`;

export function useNews() {
  console.log(apiKey)
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchNews() {
      setLoading(true);
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        if (data.articles) {
          const formattedNews = data.articles.map((item, index) => ({
            id: index + 1,
            title: item.title,
            date: item.publishedAt,
            author: item.author || "Неизвестно",
            image: item.urlToImage || "https://via.placeholder.com/800x420", 
            excerpt: item.description || "Нет описания",
            content: item.content || item.description || "Нет контента",
            url: item.url,
          }));
          setNews(formattedNews);
          setError(null);
        } else {
          setError("Новостей не найдено.");
        }
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []); // Empty dependency array - fetch only once
  return { news, loading, error };
}
