// src/data.js
import { useState, useEffect } from "react";

const apiKey = "ba3791d4ecbb48efab52ba3b05061252"; // **ЗАМЕНИ ЭТО НА СВОЙ КЛЮЧ API**
const apiUrl = `https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}&language=ru&sortBy=relevancy`;

export function useNews() {
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
            image: item.urlToImage || "https://via.placeholder.com/800x420", // Default image
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
