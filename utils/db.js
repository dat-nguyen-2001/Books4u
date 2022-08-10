const Author = require("../model/Author");
const Book = require("../model/Book");
const ObjectId = require('mongodb').ObjectId;


const db = {

  getAllBooks: async () => {
    return await Book.find();
  },

  getBooksByAuthor: async(id) => {
    const authorId = id.toString();
    return await Book.find({authorId: authorId})
  },

  getAllAuthors: async () => {
    return await Author.find()
  },

  getAuthor: async(id) => {
    return await Author.findById(id)
  },

  createAuthor: async (args) => {
    const newAuthor = new Author(args);
    return await newAuthor.save();
  },

  createBook: async (args) => {
    const newBook = new Book(args);
    return await newBook.save();
  }
};

module.exports = db;