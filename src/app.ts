import express, { Request, Response, NextFunction, Router } from 'express';
import { graphqlHTTP } from "express-graphql";
import {GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } from "graphql";

//import userData from "./mockData/MO"
const app = express();
const port = 3000;
const userData = require("./mockData/MOCK_DATA.json");


const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
      id: { type: GraphQLInt },
      first_name: { type: GraphQLString },
      last_name: { type: GraphQLString },
      gender: { type: GraphQLString },
    }),
  });

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      getAllUsers: {
        type: new GraphQLList(UserType),
        args: { id: { type: GraphQLInt } },
        resolve(parent, args) {
          return userData;
        },
      },
    },
});

const RootMutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: {
          type: UserType,
          args: {
            first_name: { type: GraphQLString },
            last_name: { type: GraphQLString },
            gender: { type: GraphQLString }
          },
          resolve(parent, args) {
            userData.push({
              id: userData.length + 1,
              first_name: args.first_name,
              last_name: args.last_name,
              gender: args.gender
            });
            // args.id = userData.length;
            return args;
          },
        },
      }
});

const schema = new GraphQLSchema( { query:RootQuery , mutation:RootMutation } );
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))
//const { graphqlHTTP } = require("express-graphql");

app.listen(port, ()=>{
    console.log("Server is running at " + port)
})