import React, { Component, Fragment, useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/Routing/PrivateRoute";
import CreateProfile from "./components/ProfileForm/CreateProfile";
import EditProfile from "./components/ProfileForms/EditProfile";


// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";

import setAuthToken from "./utils/setAuthToken";
import "./App.css";


if (localStorage.token) {
  setAuthToken(localStorage.token);
}


const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
