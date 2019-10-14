import React from "react";
import gif from "./spinner.gif";

const Spinner = () => {
  return (
    <div>
      <img
        src={gif}
        alt="Загрузка..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default Spinner;
