const Layout = require('./Layout');
const React = require('react');

module.exports = function UpdateForm({ animal, title }) {
  return (
    <Layout title={title}>
      <div className="form row">
        <div className="s12 deep-purple darken-1">
          <form className="col s12 updForm" data-id={animal.id}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  name="name"
                  id="name"
                  className="validate"
                  placeholder="name"
                  defaultValue={animal.name}
                  required
                />
              </div>
              <div className="input-field col s6">
                <input
                  name="price"
                  id="price"
                  className="validate"
                  placeholder="price"
                  defaultValue={animal.price}
                  required
                />
              </div>
              <div className="input-field col s6">
                <input
                  name="description"
                  id="description"
                  className="validate"
                  placeholder="description"
                  defaultValue={animal.description}
                  required
                />
              </div>
              <div className="input-field col s6">
                <input
                  name="map"
                  id="map"
                  className="validate"
                  placeholder="map"
                  defaultValue={animal.url}
                  required
                />
              </div>
              <button
                className="btn waves-effect waves-light purple lighten-3"
                type="submit"
              >
                Добавить
                <i className="material-icons right">send</i>
              </button>
            </div>
            <h2 className="errorAdd"></h2>
          </form>
        </div>
      </div>
    </Layout>
  );
};
