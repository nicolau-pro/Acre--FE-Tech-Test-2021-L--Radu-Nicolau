// Following: https://www.apollographql.com/docs/react/get-started/
import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

const USERS = gql`
  {
    users {
      name
      role
    }
  }
`;

client
  .query({
    query: USERS,
  })
  .then((result) => {
    console.log(result.data.users);
    render(
      <ApolloProvider client={client}>
        <App users={result.data.users.filter((user) => user.name)} />
      </ApolloProvider>,
      document.getElementById('root'),
    );
  });
