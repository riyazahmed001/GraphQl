
import {GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } from "graphql";

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
      id: { type: GraphQLInt },
      first_name: { type: GraphQLString },
      last_name: { type: GraphQLString },
      gender: { type: GraphQLString },
    }),
});

module.exports = UserType;
