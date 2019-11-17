import React from "react";
import "./App.css";
import Home from "./component/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Route, Link } from "react-router-dom";
import Login from "./component/onboarding/Login";
import SignUp from "./component/onboarding/SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" render={props => <Home {...props} />} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Footer />
    </div>
  );
}

export default App;
