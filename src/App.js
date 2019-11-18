import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SignUp from "./component/onboarding/SignUp";
import Dashboard from "./component/Dashboard/Dashboard";
import AddItems from "./component/Dashboard/AddItems";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" render={props => <Home {...props} />} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" render={props => <Dashboard {...props} />} />
      <Route
        path="dashboard/additems"
        render={props => <AddItems {...props} />}
      />
      <Footer />
    </div>
  );
}

export default App;
