import React, { Component } from 'react';

import logo from './acre-logo.svg';
import './App.min.css';

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);

class App extends Component {
  state = {
    users: this.props.users,
  };

  setFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const list = this.state.users.filter((user) => (this.state.filter ? user.role.includes(this.state.filter) : user.role));

    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />

          <h1>Welcome to acre</h1>

          <hr />

          <h2>Users</h2>

          <select onChange={this.setFilter} defaultValue={'DEFAULT'}>
            <option value="DEFAULT" hidden disabled>
              Filter...
            </option>
            <option value="ADMIN">Admin</option>
            <option value="BROKER">Broker</option>
            <option value="ADVISOR">Advisor</option>
            <option value="CONTRACTOR">Contractor</option> {/* Added an option with no users to render info <p> */}
          </select>

          {list.length > 0 ? (
            <ul>
              {list.map((user, index) => (
                <li key={index}>
                  {user.name} <span>•</span> <strong>{user.role.map((role, index, arr) => `${capitalizeFirstLetter(role)}${index < arr.length - 1 ? ', ' : ''}`)}</strong>
                  {user.role.includes('ADMIN') ? <button>🞦 Create</button> : null}
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <span role="img" aria-label="Sorry,">
                😞
              </span>{' '}
              No <strong>{capitalizeFirstLetter(this.state.filter)}</strong> users found.
            </p>
          )}
        </header>
      </div>
    );
  }
}

export default App;
