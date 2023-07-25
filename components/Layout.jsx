const React = require('react');
const Navbar = require('./Navbar');

module.exports = function Layout({ title, children, userLogin }) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;300;400&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"
        />
        <script defer src="/js/authScript.js" />
        <script defer src="/js/animalsScript.js" />
        <script defer src="/js/favoriteScript.js" />
      </head>
      <body>
        <Navbar userLogin={userLogin} />
        <div className="layout_container">{children}</div>
      </body>
    </html>
  );
};
