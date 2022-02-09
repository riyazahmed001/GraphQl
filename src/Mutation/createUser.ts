import {GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } from "graphql";
const UserType = require("./../TypeDef/User");

const userData = require("./../mockData/MOCK_DATA.json");

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

module.exports = RootMutation;