import React, { useState } from "react";

import axios from "axios";
import setToken from "../config/axios";

function LoginComp() {
  let [usTxt, setUsTxt] = useState({
    us: "",
    ps: "",
  });
  const handleClick = () => {
    axios
      .post("/login", usTxt)
      .then((res) => {
        console.log(res);
        setToken(res.data.token);
      })
      .catch((err) => {
        console.log(err);
        setToken("");
      });
  };
  const handleTxtChange = (e) => {
    console.log(e.target.name);
    let oldusTxt = { ...usTxt };
    oldusTxt[e.target.name] = e.target.value;
    setUsTxt(oldusTxt);
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleTxtChange}
        name="us"
        value={usTxt.us}
      />
      <br />
      <input
        type="password"
        onChange={handleTxtChange}
        name="ps"
        value={usTxt.ps}
      />
      <br />
      <button onClick={handleClick}>login</button>
      <br />
      {usTxt.us}
      <br />
      {usTxt.ps}
    </div>
  );
}

export default LoginComp;
