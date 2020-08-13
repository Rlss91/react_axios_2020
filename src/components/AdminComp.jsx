import React, { useState } from "react";

import axios from "axios";

function AdminComp() {
  const handleClick = () => {
    axios
      .get("/2323")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  return (
    <div>
      Admin comp
      <br />
      <button onClick={handleClick}>click here</button>
    </div>
  );
}

export default AdminComp;
