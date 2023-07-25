const React = require('react');
const Layout = require('./Layout');
const Animal = require('./Animal');

module.exports = function Favorites({ favorites, title, userLogin }) {
  return (
    <Layout title={title} userLogin={userLogin}>
      <div className="favorites">
        {favorites.map((favorite) => {
          return (
            <Animal
              animal={favorite.Animal}
              key={favorite.id}
              userLogin={userLogin}
              favorite={favorite}
            />
          );
        })}
      </div>
    </Layout>
  );
};
