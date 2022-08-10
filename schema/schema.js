const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    id: ID
    name: String
    genre: String
    image: String
    author: Author
  }
  type Author {
    id: ID!
    name: String
    age: Int
    books: [Book]
  }
  # ROOT TYPE
  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!): Author
  }
  type Mutation {
    createAuthor(name: String, age: Int): Author
    createBook(name: String, genre: String, authorId: ID!, image: String): Book
  }
`;

module.exports = typeDefs;
