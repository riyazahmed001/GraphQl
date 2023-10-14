const DataLoader = require('dataLoader');
class Loader {
    createUsersLoader(reviewsApi) {
    return new DataLoader(async (locationIds) => {
        const ratingsForId = await reviewsApi.getOverAllRatingForLocationDataLoaders(locationIds);
        const result = locationIds.map((locationId) => ratingsForId[locationId]);
        return result;
    });
    }

    getReviewForLocationLoader(reviewApi) {
        return new DataLoader(async (locationIds) => {
            const reviewsForAllLocation = reviewApi.getAllReview();
            const result = locationIds.map((locationId) => reviewsForAllLocation.filter(review=> review.locationId == locationId));
            return result;
        });
    }
}
const loader = new Loader()
module.exports = loader;