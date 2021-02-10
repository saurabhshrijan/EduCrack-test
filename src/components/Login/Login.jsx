import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginAuth, registeredUsers } from "../../redux/actions/action_auth";
import { Redirect } from "react-router-dom";
import "./Login.css";
export default function Login() {
  const [state, setState] = useState({
    email: "",
    emailErrorMessage: "",
    password: "",
    passwordErrorMessage: ""
  });
  const loginDispatch = useDispatch();
  const getRegisteredUsers = useDispatch();
  useEffect(() => {
    // since we dont have service api we call our dummy api to get all users registered and set in our redux store
    getRegisteredUsers(registeredUsers());
  }, []);
  
  const allUsers = useSelector((st) => st.auth.registeredUsers);
  const handleChange = (e) => {
    setState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      };
    });
  };
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  function validatePassword(password) {
    return password.length >= 6 && password.length <= 10;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(state.email)) {
      setState((prevState) => ({
        ...prevState,
        emailErrorMessage: "Inavlid Email format",
        passwordErrorMessage: ""
      }));
    } else if (!validatePassword(state.password)) {
      setState((prevState) => ({
        ...prevState,
        passwordErrorMessage: "password is in incorrect format",
        emailErrorMessage: ""
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        emailErrorMessage: "",
        passwordErrorMessage: ""
      }));
      console.log(allUsers);
      let loginDetails = {
        idToken: null
      };
      //logic for finding valid user from db here local-json file has been used
      if (
        allUsers.find((ele) => {
          return ele.email === state.email && ele.password === state.password;
        })
      ) {
        //here JWT token could be used but since we dont have service layer we use dummy token
        loginDetails.idToken = Math.random();
      }
      loginDispatch(LoginAuth(loginDetails));
      localStorage.setItem("idToken", loginDetails.idToken);
    }
  };

  return localStorage.getItem("idToken") ? (
    <Redirect to="/" />
  ) : (
    <div className="wrapper">
      <div className="container">
        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="email">
            <input
              type="text"
              name="email"
              required={true}
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="password">
            <input
              type="password"
              name="password"
              placeholder="password"
              required={true}
              onChange={handleChange}
            />
          </div>
          <div className="Button">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
