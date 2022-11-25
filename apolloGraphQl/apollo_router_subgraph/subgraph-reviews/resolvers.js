const resolvers = {
  Query: {
    latestReviews: (_, __, {dataSources}) => {
      return dataSources.reviewsAPI.getLatestReviews();
    }
  },
  Mutation: {
    submitReview: (_, {locationReview}, {dataSources}) => {
      const newReview = dataSources.reviewsAPI.submitReviewForLocation(locationReview);
      return {code: 200, success: true, message: 'success', locationReview: newReview};
    }
  },
  Location: {
    overallRating: ({id}, _, {dataSources}) => {
      return dataSources.reviewsAPI.getOverallRatingForLocation(id);
    },
    reviewsForLocation: ({id}, args, {dataSources}) => {
      console.log(args);
      console.log(args.limit);
      if(args.limit !== null) {
        return dataSources.reviewsAPI.getReviewsForLocationLimitBySize(id,args.limit);
      }
      return dataSources.reviewsAPI.getReviewsForLocation(id);
     }
  },
  Review: {
    location: (parent,args) => {
      console.log(args);
      return {id: parent.locationId};
    }
  }
};

module.exports = resolvers;
