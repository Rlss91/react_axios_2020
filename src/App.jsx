import React, { useEffect } from "react";
import "./App.css";

import axios from "axios";
import { setBaseUrl } from "./config/axios";

import LoginComp from "./components/LoginComp";
import AdminComp from "./components/AdminComp";

function App() {
  useEffect(() => {
    // setToken("2010");
    setBaseUrl();
  }, []);
  const handleClick = () => {
    axios
      .post("/", {
        id: "1234",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const handleClick_custom_token = () => {
    const axiosOptions = {
      headers: {
        token: "sadflokger;oiger09432[09kdfpgoikmerphoije4poi",
      },
    };
    axios
      .post(
        process.env.REACT_APP_BASE,
        {
          id: "1234",
          token: "ewrioujfh23480975ry03498thjarpoij",
        },
        axiosOptions
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      {/* <button onClick={handleClick}>axios</button> */}
      <LoginComp />
      <br />
      <AdminComp />
    </div>
  );
}

export default App;
