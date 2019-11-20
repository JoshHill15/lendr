import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SignUp2 from "./component/onboarding/SignUp2";
import Dashboard from "./component/Dashboard/Dashboard";
import AddItems from "./component/Dashboard/AddItems";

function App() {
  return (
    <div className="App">
      <Route path="/" render={props => <Header {...props} />} />
      <Router>
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route path="/signup" component={SignUp2} />
          <Route path="/dashboard" render={props => <Dashboard {...props} />} />
          <Route path="/additems" render={props => <AddItems {...props} />} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
