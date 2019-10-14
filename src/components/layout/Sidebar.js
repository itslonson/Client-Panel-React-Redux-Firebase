import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Link to="/clients/add" className="btn btn-success btn-block">
      <i className="fas fa-plus" /> Добавить
    </Link>
  );
};

export default Sidebar;
