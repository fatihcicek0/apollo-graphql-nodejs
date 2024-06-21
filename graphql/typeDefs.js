const {  gql } = require('apollo-server');
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    books: [Book]
  }

  type Book {
    id: ID!
    title: String!
    author: User!
    description: String
  }

  type Query {
    users: [User]
    books: [Book]
  }

  type Mutation {
    addUser(name: String!): User
    addBook(title: String!, authorId: ID!, description: String): Book
    updateBook(id: ID!, title: String, authorId: ID, description: String): Book
    deleteBook(id: ID!): Book
  }

  type Subscription {
    bookAdded: Book
    bookUpdated: Book
    bookDeleted: Book
  }
`;
module.exports = typeDefs;