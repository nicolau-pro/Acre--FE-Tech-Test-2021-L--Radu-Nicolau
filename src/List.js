import React, { Component } from 'react';
import { gql, useLazyQuery, useQuery } from '@apollo/client';

import logo from './acre-logo.svg';

const USERS = gql`
  query GetUsers {
    users {
      name
      role
    }
  }
`;

function GetUsers() {
  const { loading, error, data } = useQuery(USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.users.map((user, index) => (
    <li key={index}>
      {user.name} <strong>{user.role}</strong>
    </li>
  ));
}

class List extends Component {
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

          <ul>{GetUsers()}</ul>
        </header>
      </div>
    );
  }
}

export default List;
