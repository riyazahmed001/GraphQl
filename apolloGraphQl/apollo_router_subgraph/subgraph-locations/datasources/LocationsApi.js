const {locations} = require('./locations_data.json');

class LocationsAPI {
  getAllLocations() {
    return locations;
  }

  getLocation(id) {
    console.log("Entering this resolver Reference" + id);
    return locations.find(l => l.id === id);
  }
}

module.exports = LocationsAPI;
