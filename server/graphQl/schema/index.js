const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  
    type User {
        _id: ID!
        userName: String!
        password: String
        email: String!
        homeTown: String!
        createdEvents: [Event!]
    }
        
    input UserInput {
        userName: String!
        password: String!
        email: String!
        homeTown: String!
    }

    type Login {    
        email: String!
        password: String!
    }

    input LoginInput {    
        email: String!
        password: String!
    }
    
    type AuthData {
        userId: ID!
        token: String!
        tokeExpiration: Int!
    }

    type Article {    
        _id: ID!
        title: String!
        body: String!
        createdAt: String!
    }

    input ArticleInput {
        title: String!
        body: String!
    }
    
    type Event {
         _id: ID!
         userName: String!
         creator: User!
    }
        
    input EventInput {
        userName: String!
        email: String!
        homeTown: String!
    }

    type Query {
        articles:[Article!]
        event:[Event!]
        login(email:String!, password:String!): AuthData!     
    }

    type Mutation {
        createArticle(article:ArticleInput): Article
        createUser(user:UserInput): User
        createEvent(eventInput: EventInput): Event
    }

    schema {
        query: Query
        mutation: Mutation
    }
`);
