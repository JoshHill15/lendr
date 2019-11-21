import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Footer from "./component/Footer";
import SignUp2 from "./component/onboarding/SignUp2";
import Dashboard from "./component/Dashboard/Dashboard";
import AddItems2 from "./component/Dashboard/AddItems2";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route path="/signup" component={SignUp2} />
          <Route path="/dashboard" render={props => <Dashboard {...props} />} />
          <Route path="/additems" render={props => <AddItems2 {...props} />} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
