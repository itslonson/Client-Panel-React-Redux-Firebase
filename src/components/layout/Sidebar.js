import React, { Component } from "react";
import Modal from "./Modal";

export class Sidebar extends Component {
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-success btn-block"
          data-toggle="modal"
          data-target="#addContactModal"
        >
          <i className="fas fa-plus" /> Добавить
        </button>
        <Modal />
      </div>
    );
  }
}

export default Sidebar;
