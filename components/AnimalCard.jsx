const React = require('react');
const Layout = require('./Layout');

module.exports = function ApartmentCard({ title, animal, userLogin }) {
  return (
    <Layout title={title} userLogin={userLogin}>
      <div className="apartmentOne_card" data-id={animal.id}>
        <div className="apartment_card grey darken-1">
          <div className="card-image">
            <img className="photo" src={animal.url} />
          </div>
          <div className="description_container">
            <span className="oneCard-title">{animal.name}</span>
            <div className="card-content">
              Стоимость:
              <span className="oneCard-price">{animal.price}</span>
            </div>
            <div className="card-content">
              <span className="oneCard-title">
                Описание: {animal.description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
