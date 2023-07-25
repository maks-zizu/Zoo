const Layout = require('./Layout');
const React = require('react');
const Animal = require('./Animal');
const AddForm = require('./AddForm');

module.exports = function AnimalList({ title, animals, favorites, userLogin }) {
  return (
    <Layout title={title} userLogin={userLogin}>
      {userLogin && <AddForm />}
      <div className="row animalList">
        {animals.map((animal) => (
          <Animal animal={animal} key={animal.id} favorites={favorites} userLogin={userLogin} />
        ))}
      </div>
    </Layout>
  );
};
