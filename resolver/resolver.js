const db = require('../utils/db');
const {getAllBooks, getBooksByAuthor, getAllAuthors, getAuthor, createAuthor, createBook} = db;

const resolvers = {
  // QUERY
  Query: {
    books:  () => getAllBooks(),
    authors:  () => getAllAuthors(),
  },

  Book: {
    author: (parent, args) => getAuthor(parent.authorId),
  },
  Author: {
    books: (parent, args) => getBooksByAuthor(parent._id),
  },

  //MUTATION
  Mutation: {
    createAuthor: async (parent, args) => createAuthor(args),

    createBook: async (parent, args) => createBook(args),
  },
};
module.exports = resolvers;
