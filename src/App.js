import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";

import StackOverflow from "./component/StackOverflow"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<StackOverflow />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
