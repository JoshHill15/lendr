import React from "react";

function Home(props) {
  const routeToLogin = () => {
    props.history.push("./login");
  };
  const routeToSignUp = () => {
    props.history.push("./signup");
  };

  return (
    <div>
      <h1>Welcome to Lendr!</h1>
      <button onClick={routeToLogin}>Login</button>
      <button onClick={routeToSignUp}>Sign Up</button>
    </div>
  );
}

export default Home;
