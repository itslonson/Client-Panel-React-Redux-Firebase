import React, { Component } from "react";
import PropTypes from "prop-types";

import { notifyUser } from "../../actions/notifyActions";
import Alert from "../layout/Alert";

import { compose } from "redux";
import { connect } from "react-redux";

import { firebaseConnect } from "react-redux-firebase";
import "firebase/auth";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const { firebase, notifyUser } = this.props;
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => notifyUser("Неверные данные входа", "error"))
      .then(notifyUser(null, null));
  };

  render() {
    const { message, messageType } = this.props.notify;
    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              {message ? (
                <Alert message={message} messageType={messageType} />
              ) : null}
              <h2 className="text-center pb-4 pt-3">
                <span className="text-primary">
                  <i className="fas fa-lock"></i> Вход
                </span>
              </h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Почта</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Пароль</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    required
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Войти"
                  className="btn btn-primary btn-block"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  firebase: PropTypes.object.isRequired,
  notify: PropTypes.object.isRequired,
  notifyUser: PropTypes.func.isRequired
};

export default compose(
  firebaseConnect(),
  connect(
    (state, props) => ({
      notify: state.notify
    }),
    { notifyUser }
  )
)(Login);
