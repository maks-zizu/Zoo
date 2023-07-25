const Layout = require('./Layout');
const React = require('react');

module.exports = function AddForm({ title }) {
  return (
    <div className="form row">
      <div className="s12 pink lighten-4">
        <form
          className="col s12 addForm"
          name="addForm"
          action="/api/animals/addAnimal"
          method="POST"
        >
          <div className="row">
            <div className="input-field col s6">
              <input
                name="name"
                id="name"
                className="validate"
                placeholder="название животного"
                required
              />
            </div>
            <div className="input-field col s6">
              <input
                name="url"
                id="url"
                className="validate"
                placeholder="картинка"
                required
              />
            </div>
            <div className="input-field col s6">
              <input
                name="description"
                id="description"
                className="validate"
                placeholder="описание"
                required
              />
            </div>
            <div className="input-field col s6">
              <input
                name="price"
                id="price"
                className="validate"
                placeholder="стоимость"
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
  );
};
