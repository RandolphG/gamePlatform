const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql").graphqlHTTP;
const { buildSchema } = require("graphql");

const app = express();

const host = "0.0.0.0";
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

/*app.get('/', (request, response, next) => {
  response.send('connected');
});*/

app.use(
  "/graphql",
  graphqlHttp({
    schema: buildSchema(`
        type RootQuery {
            events: [String]
        }
    
        type RootMutation {
            createEvent(name:  String): String
        }
    
        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `),
    rootValue: {
      events: () => {
        return ["one", "two", "three", "four"];
      },
      createEvent: (args) => {
        return args.name;
      },
    },
    graphiql: true,
  })
);

app.use(express.static("build"));

app.listen(3000);

app.listen(port, host, function () {
  console.log(`Server started : port{${port}} host{${host}} `);
});
