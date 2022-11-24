const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(book: Book): User
    removeSkill(bookID: String!): User
  }

  type Book {
    _id: ID!
    authors: String
    description: String
    title: String
    image: String
    link: String
  }
`;

module.exports = typeDefs;
