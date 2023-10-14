const resolvers = {
  Query: {
    latestReviews: (_, __, {dataSources}) => {
      return dataSources.reviewsAPI.getLatestReviews();
    },
    allReviews: (_, __, {dataSources}) => {
      return dataSources.reviewsAPI.getAllReview();
    },
  },
  Mutation: {
    submitReview: (_, {locationReview}, {dataSources}) => {
      const newReview = dataSources.reviewsAPI.submitReviewForLocation(locationReview);
      return {code: 200, success: true, message: 'success', locationReview: newReview};
    }
  },
  Location: {
    overallRating: async (/*locations*/{id}, _, {dataSources, loaders}) => {
        // return dataSources.reviewsAPI.getOverallRatingForLocation(id);
       const result =  await loaders.locationLoader.load(id);
       return result;
      //return loaders.locationLoader.loadMany(locations.map((location) => location.locationId));
    },
    reviewsForLocation: ({id}, args, {dataSources, loaders}) => {
      if(!!args.limit) {
        console.log(args);
        console.log(args.limit);
        return dataSources.reviewsAPI.getReviewsForLocationLimitBySize(id,args.limit);
      }
      const result = loaders.reviewLoaderForLocationL.load(id);
      return result
      // return dataSources.reviewsAPI.getReviewsForLocation(id);
     }
  },
  Review: {
    location: (parent,args) => {
      // console.log(args);
      return {id: parent.locationId};
    }
  }
};

module.exports = resolvers;
