import React, { Component } from "react";
import { Link } from "react-router-dom";

class Clients extends Component {
  render() {
    const clients = [
      {
        id: "1",
        firstName: "Иван",
        lastName: "Алексеев",
        email: "ialekseev@mail.com",
        phone: "+7(999)-000-00-00",
        balance: "30.99"
      },
      {
        id: "2",
        firstName: "Оксана",
        lastName: "Иванова",
        email: "oivanova@mail.com",
        phone: "+7(999)-111-11-11",
        balance: "80"
      }
    ];
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
              <h5>сумма общая</h5>
            </div>
            <table className="table">
              <thead className="thead-inverse">
                <tr>
                  <th>Имя</th>
                  <th>Почта</th>
                  <th>Телефон</th>
                  <th>Баланс</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {clients.map(client => (
                  <tr key={clients.id}>
                    <td>
                      {client.firstName} {client.lastName}
                    </td>
                    <td>{client.email}</td>
                    <td>{client.phone}</td>
                    <td>{parseFloat(client.balance).toFixed(2)} ₽</td>
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
      return <h1>Загрузка...</h1>;
    }
  }
}

export default Clients;
