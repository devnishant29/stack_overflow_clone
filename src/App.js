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
import ViewQuestion from "./component/ViewQuestion"
import Question from "./component/Add-Question/Question";
import Auth from "./component/Auth"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<StackOverflow />}/>
          <Route exact path="/auth" element={<Auth />}/>
          <Route exact path="/add-question" element={<Question />}/>
          <Route exact path="/question" element={<ViewQuestion />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
