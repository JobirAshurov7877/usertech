import React from "react";

const Sitemap = () => {
  // Получите список всех маршрутов вашего приложения

  // Генерация XML-структуры с ссылками на маршруты
  const generateSitemap = () => {
    const sitemapItems = `<url>
        <loc>${window.location.origin}/</loc>
      </url>
      <url>
        <loc>${window.location.origin}/studio</loc>
      </url>
      <url>
        <loc>${window.location.origin}/algoritm-job</loc>
      </url>
      <url>
        <loc>${window.location.origin}/services</loc>
      </url>
      <url>
        <loc>${window.location.origin}/services/sub_menu/:id</loc>
      </url>
      <url>
        <loc>${window.location.origin}/services/menu_post_deteile/:id</loc>
      </url>
      <url>
        <loc>${window.location.origin}/contact</loc>
      </url>
      <url>
        <loc>${window.location.origin}/blog</loc>
      </url>
      <url>
        <loc>${window.location.origin}/blog-detail/:id</loc>
      </url>
      <url>
        <loc>${window.location.origin}/jobs</loc>
      </url>
      <url>
        <loc>${window.location.origin}/*</loc>
      </url>
      `;

    return `<?xml version="1.0" encoding="UTF-8"?>
      <user xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${sitemapItems}
      </user>`;
  };

  // Рендеринг компонента
  return <pre>{generateSitemap()}</pre>;
};

export default Sitemap;
