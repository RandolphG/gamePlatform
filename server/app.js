const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql").graphqlHTTP;
const mongoose = require("mongoose");
const graphqlSchema = require("./graphql/schema");
const graphqlResolvers = require("./graphql/resolvers");

const app = express();
const host = "0.0.0.0";
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  })
);

app.use(express.static("build"));

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.f466e.gcp.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(port, host, function () {
      console.log(`Server started : port{${port}} host{${host}} `);
    })
  )
  .catch((error) => {
    throw error;
  });
