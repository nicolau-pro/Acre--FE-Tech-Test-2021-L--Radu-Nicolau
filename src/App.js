import React, { Component } from "react";
import { ApolloProvider } from "react-apollo";

import logo from "./acre-logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />

          <h1>Welcome to acre</h1>

          <h2>Users</h2>

          <select>
            <option value="ADMIN">Admin</option>
            <option value="ADMIN">Broker</option>
            <option value="ADVISOR">Advisor</option>
          </select>

          <ul>
            <li>
              John <strong>Admin</strong>
            </li>
            <li>
              Mary <strong>Admin</strong>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
