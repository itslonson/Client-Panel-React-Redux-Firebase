import React from "react";
import AddClient from "../../components/clients/AddClient";

const Modal = () => {
  return (
    <div>
      <div
        className="modal fade"
        id="addContactModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="addContactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addContactModalLabel">
                Добавление клиента
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <AddClient />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
