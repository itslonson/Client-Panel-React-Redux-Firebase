import React, { Component } from "react";
import { Link } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
class Clients extends Component {
  state = {
    totalOwed: null
  };

  static getDerivedStateFromProps(props, state) {
    const { clients } = props;

    if (clients) {
      //Addition
      const total = clients.reduce((total, client) => {
        return total + parseFloat(client.balance.toString());
      }, 0);
      return { totalOwed: total };
    }
    return null;
  }

  render() {
    const { clients } = this.props;
    const { totalOwed } = this.state;

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                <i
                  className="fas fa-users"
                  style={{ paddingRight: "1rem" }}
                ></i>
                Клиенты
              </h2>
            </div>
            <div className="col-md-6">
              <h5 className="text-right text-secondary">
                Общий долг{" "}
                <span className="text-primary">
                  {parseFloat(totalOwed).toFixed(2)}₽
                </span>
              </h5>
            </div>
            <table className="table">
              <thead className="thead-inverse">
                <tr>
                  <th>Имя</th>
                  <th>Почта</th>
                  <th>Долг</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {clients.map(client => (
                  <tr key={client.id}>
                    <td>
                      {client.firstName} {client.lastName}
                    </td>
                    <td>{client.email}</td>
                    <td>{parseFloat(client.balance).toFixed(2)}₽</td>
                    <td>
                      <Link
                        to={`/clients/${client.id}`}
                        className="btn btn-secondary btn-sm"
                      >
                        <i className="fas fa-arrow-circle-right"></i> Подробнее
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

Clients.propTypes = {
  firestore: PropTypes.object.isRequired,
  clients: PropTypes.array
};

export default compose(
  firestoreConnect([{ collection: "clients" }]),
  connect((state, props) => ({ clients: state.firestore.ordered.clients }))
)(Clients);
