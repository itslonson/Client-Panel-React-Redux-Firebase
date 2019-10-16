import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import { Provider } from "react-redux";
import { store } from "./store";
import { rrfProps } from "./store";

import AppNavbar from "./components/layout/AppNavbar";
import Dashboard from "./components/layout/Dashboard";
import ClientDetails from "./components/clients/ClientDetails";
import EditClient from "./components/clients/EditClient";
import Login from "./components/auth/Login";

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <div className="App">
            <AppNavbar></AppNavbar>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/client/:id" component={ClientDetails} />
                <Route exact path="/client/edit/:id" component={EditClient} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </div>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
