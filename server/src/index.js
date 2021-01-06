import { ApolloServer, gql} from "apollo-server-express";
import express from "express"; 
import mongoose from "mongoose";
import { typeDefs } from "./typeDefs.js";
import { resolvers } from "./resolvers.js"; 
import Recipe from "./models/Recipe.js";

// making a connection, not connected yet 
mongoose.connect('mongodb://localhost:27017/recipeBook', {useNewUrlParser: true, useUnifiedTopology: true}); 
const db = mongoose.connection


const app = express(); 

const server = new ApolloServer({
   typeDefs,
   resolvers,
   context: ({req}) => ({
       someContextProp: 'somestring',
       db: mongoose.connection.db,
       recipe: Recipe
   })
});
 
server.applyMiddleware({app}); //app is from an existing express app

//this will open the connection console log 
db.once('open', () => {
    app.listen({ port:4000}, () => 
        console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    )
})

