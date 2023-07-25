const React = require("react");
const Layout = require("./Layout");

module.exports = function LogForm({ title }) {
  return (
    <Layout title={title}>
      <form className=" logForm" action="/api/auth/log" method="POST">
        <div className="row">
          <div className="input-field">
            <input
              name="login"
              id="login"
              className="validate"
              placeholder="login"
              required
            />
          </div>
          <div className="input-field">
            <input
              name="password"
              id="password"
              className="validate"
              placeholder="password"
              required
            />
          </div>

          <button
            className="btn waves-effect waves-light amber darken-1"
            type="submit"
          >
            add
            <i className="material-icons right">send</i>
          </button>
        </div>
        <h2 className="logError"></h2>
      </form>
    </Layout>
  );
};
