let {reviews} = require('./reviews_data.json');

class ReviewsAPI {
  getReview(id) {
    return reviews.find(r => r.id === id);
  }

  getAllReview() {
    console.log("get All review")
    return reviews;
  }
  
  getReviewsForLocation(id) {
    console.log("review " + id)
    return reviews.filter(r => r.locationId === id);
  }

  getReviewsForLocationLimitBySize(id,size) {
    let reviewsForId = this.getReviewsForLocation(id);
    console.log(reviewsForId.length);
    return reviewsForId.slice(0,Math.min(size, reviewsForId.length));
  }

  getLatestReviews() {
    return reviews.slice(Math.max(reviews.length - 3, 0));
  }

  getOverallRatingForLocation(id) {
    console.log("id", id);
    const allRatings = reviews
      .filter(r => r.locationId === id)
      .map(r => r.rating);
    const sum = allRatings.reduce((a, b) => a + b, 0);
    const average = sum / allRatings.length || 0;
    return average;
  }

  getOverAllRatingForLocationDataLoaders(ids) {
    const allRatings = reviews
                          .filter((review) => ids.includes(review.locationId))
                          .filter((obj, index) => {
                            return index === reviews.findIndex(o => obj.locationId === o.locationId);
                          });
    // Create an object to map "id" to the sum of "ratings"
    const result = allRatings.reduce((accumulator, currentValue) => {
      const locationId = currentValue.locationId;

      if (accumulator[locationId] === undefined) {
        accumulator[locationId] = this.getOverallRatingForLocation(locationId);
      } else {
        accumulator[locationId] += this.getOverallRatingForLocation(locationId);
      }

      return accumulator;
    }, {});

    return result;
  }
  submitReviewForLocation(review) {
    const newReview = {id: `rev-${reviews.length + 1}`, ...review};
    reviews = [...reviews, newReview];
    return newReview;
  }
}

module.exports = ReviewsAPI;
