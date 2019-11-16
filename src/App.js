import React from 'react';
import './App.css';
import OnBoarding from './OnBoarding';
import { Route, Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Route path = "/" component = {OnBoarding} /> 
    </div>
  );
}

export default App;
