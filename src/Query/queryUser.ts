import {GraphQLObjectType, GraphQLInt,GraphQLList } from "graphql";
const UserType = require("./../TypeDef/User");
const userData = require("./../mockData/MOCK_DATA.json");

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

module.exports = RootQuery;