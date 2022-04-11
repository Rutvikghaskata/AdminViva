import React, { useState } from "react";
import logo from "../images/logo1.png";
import { Form,  } from "react-bootstrap";
import "../App.css";
const Login = () => {
  const [contactNo, setContactNo] = useState("");
  const [password, setPassword] = useState("");
  const [RqcontactNo, setRqContactNo] = useState("");
  const [Rqpassword, setRqPassword] = useState("");
  function saveDataget() {
    if (contactNo.length === 0 && password.length === 0) {
      setRqContactNo("*Mobile Number is requied");
      setRqPassword("*Password is requied");
    } else if (contactNo.length === 0) {
      setRqContactNo("*Mobile Number is requied");
    } else if (password.length === 0) {
      setRqPassword("*Password is requied");
    } else {
      let data = { contactNo, password };
      fetch("http://evspoint.com/api/owner/signin", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIffsInR5cCI6IkpXVCJ1.eyJ1c2VySWQiOiI2MWJjNWRlMzEyODRlN2ZjYTM3OGMwMzAiLCJffpYXQiOjE2Mzk3MzQ3NTV2.bHygAffPHN6AUUldKvEyvLLdtWvjGYPdaxjtrPnYw88Vo",
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate, br",
        },
        body: JSON.stringify(data),
      })
        .then((resp) => resp.json())
        .then((result) => {
          if (!result.token) {
            alert("invalid authentication ");
          } else {
            console.log(result.token);
            localStorage.setItem("token", result.token);
            window.location.href = "User";
          }
        });
    }
  }
  return (
    <div className="main-back">
      <div className="main-bg">
        <div className="row">
          <div className="col-xs-6 col-sm-4 col-lg-6 login-right">
            <div>
              <div className="imgdiv">
                <img
                  src={logo}
                  alt="logo"
                  width="150px"
                  height="150px"
                  className="ima1"
                />
              </div>
              <h1 className="lbl">Welcome!</h1>
              <Form noValidate>
                <Form.Group>
                  <Form.Label className="lbl1">ContactNo:</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="Enter ContactNo"
                    className="text"
                    onChange={(e) => {
                      setContactNo(e.target.value);
                    }}
                  />
                  <h6 className="error">{RqcontactNo}</h6>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    name="firstName"
                    placeholder="Enter Password"
                    className="text"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <h6 className="error">{Rqpassword}</h6>
                  <Form.Control.Feedback tooltip>
                    Looks good!
                  </Form.Control.Feedback>
                </Form.Group>
              </Form>
              <button type="button" className="btn2" onClick={saveDataget}>
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
