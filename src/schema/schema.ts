import { GraphQLSchema } from "graphql";

const RootQuery = require("./../Query/queryUser");
const RootMutation = require("./../Mutation/createUser");
const schema = new GraphQLSchema( { query:RootQuery , mutation:RootMutation } );

module.exports = schema;