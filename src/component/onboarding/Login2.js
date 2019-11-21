import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Login2 = props => {
  const [error, setError] = useState();
  const [data, setData] = useState({
    username: "",
    password: ""
  });
  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(
        "https://zero5nelsonm-lendr.herokuapp.com/login",
        `grant_type=password&username=${data.username}&password=${data.password}`,
        {
          headers: {
            //btoa is converting our client/id secret to base 64 - required for oath2
            Authorization: `Basic ${btoa(
              "waZnYSi644XEABsBiNX9gcf8:NGyHSSzpj3rJaNSD9eFK98F"
            )}`,
            "Content-Type": "application/x-www-form-urlencoded"
          },
          data: { username: data.username, password: data.password }
        }
      )
      .then(response => {
        console.log(response);
        localStorage.setItem("token", response.data.payload);
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log("this is an error", err);

        setError(err.response.data.message);
      });
  };
  console.log(data);
  //============= styled components =================//

  const LoginC = styled.div`
  height: 300px;
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content center;
  background: rgba(153,50,204,0.5);
  opacity: .8;
  box-shadow: 10px 10px 28px -12px rgba(0, 0, 0, 0.75);
  margin-bottom:3%;
  border-radius:4%;
`;

  const Button = styled.button`
    border: none;
    border-radius: 4px;
    margin: 2%;
    padding: 10px 25px;
    box-shadow: 10px 10px 28px -12px rgba(0, 0, 0, 0.75);
  `;

  return (
    <LoginC>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="login">
          {error && <div className="error">{error}</div>}
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={data.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={data.password}
            onChange={handleChange}
          />
          <Button className="button" type="submit">
            Sign In
          </Button>
        </div>
      </form>
    </LoginC>
  );
};
export default Login2;
