import React, { Component } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom";

import StackOverflow from "./component/StackOverflow";
import ViewQuestion from "./component/ViewQuestion";
import Question from "./component/Add-Question/Question";
import Auth from "./component/Auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  const PrivateRoute = ({ component: Component, ...rest }) => {
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Navigate
            to={{
              pathname: "/auth",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />;
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<StackOverflow />} />
          <Route exact path="/auth" element={<Auth />} />
          <Route exact path="/add-question" element={<Question />} />
          <Route exact path="/question" element={<ViewQuestion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
