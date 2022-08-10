const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");

//Load schema & resolvers
const typeDefs = require("./schema/schema");

const resolvers = require("./resolver/resolver");

//Connect to DB
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://datnguyen:datlinh@books-graphql.rovh17v.mongodb.net/BooksAndAuthors?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('DB connected')
  } catch (err) {
    console.log(err);
  }
};

connectDB();



const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();
server.start().then((res) => {
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  });
});
