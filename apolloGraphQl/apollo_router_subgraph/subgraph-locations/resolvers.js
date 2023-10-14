const resolvers = {
  Query: {
    locations: (_, __, { dataSources }) => {
      return dataSources.locationsAPI.getAllLocations();
    },
    location: (_, { id }, { dataSources }) => {
      return dataSources.locationsAPI.getLocation(id);
    },
  },
  Location: {
    __resolveReference: async ({id}, {dataSources, loaders}) => {
      const result =  await loaders.locationLoader.load(id);
      return result;
      // return dataSources.locationsAPI.getLocation(id);
    }
  }
};

module.exports = resolvers;
