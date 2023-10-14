const DataLoader = require('dataLoader');
class Loader {
    getLocationForLocationId(locationApi) {
        return new DataLoader(async (locationIds) => {
            const result = locationIds.map((locationId) => locationApi.getLocation(locationId));
            return result;
        });
    }
}
const loader = new Loader()
module.exports = loader;