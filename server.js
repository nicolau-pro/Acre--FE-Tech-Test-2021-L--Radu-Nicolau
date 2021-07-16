const { ApolloServer, gql } = require("apollo-server");
const _ = require("lodash");

const ADMIN = "ADMIN";
const BROKER = "BROKER";
const ADVISOR = "ADVISOR";

const USERS = [
  {
    name: "Peter Falkirk",
    role: [ADMIN],
    createdAt: "Fri Jan 18 2019 13:10:20 GMT+0000 (Greenwich Mean Time)",
    permsissions: {
      createCustomer: true
    }
  },
  {
    name: "Mary Gardy",
    role: [ADVISOR, BROKER],
    createdAt: "Fri Jan 18 2018 09:10:20 GMT+0000 (Greenwich Mean Time)",
    permsissions: {
      createCustomer: true
    }
  },
  {
    name: "Tomas Hilter",
    role: [BROKER],
    createdAt: "Fri Jan 18 2018 09:10:20 GMT+0000 (Greenwich Mean Time)",
    permsissions: {}
  },
  {
    name: "Superhands Fredrick",
    role: [ADVISOR],
    createdAt: "",
    permsissions: {}
  },
  {
    name: "Peter Stifler",
    role: [BROKER],
    createdAt: "Fri Jan 18 2018 09:10:20 GMT+0000 (Greenwich Mean Time)",
    permsissions: {}
  },
  {
    name: "Anne Welder",
    role: [BROKER],
    createdAt: "Fri Jan 18 2018 09:10:20 GMT+0000 (Greenwich Mean Time)",
    permsissions: {}
  },
  {
    name: "",
    role: [BROKER],
    createdAt: "Fri Jan 18 2018 09:10:20 GMT+0000 (Greenwich Mean Time)",
    permsissions: {}
  },
  {
    name: "Mourinho",
    role: [BROKER],
    createdAt: "Fri Jan 18 2018 09:10:20 GMT+0000 (Greenwich Mean Time)",
    permsissions: {
      createCustomer: true
    }
  },
  {
    name: "Peteris Best",
    role: [BROKER],
    createdAt: "Fri Jan 18 2018 09:10:20 GMT+0000 (Greenwich Mean Time)",
    permsissions: {}
  }
];

const filterUsersByRole = (users, role) => {
  return _.filter(users, user => {
    return _.find(user.role, userRole => {
      return userRole === role;
    });
  });
};

const typeDefs = `
  type Query {
    users(role: String): [User]
  }

	type User {
    name: String!
    role: [Role]!
    createdAt: String
  }
  
  enum Role {
    ADMIN
    BROKER
    ADVISOR
  }
`;

const resolvers = {
  Query: {
    users: async (root, { role }) => {
      try {
        if (role) {
          return filterUsersByRole(USERS, role);
        }
        return USERS;
      } catch (e) {
        console.error(e);
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
