const request = require("request");

const geoCode = function(address, callback) {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoibmFjaGFwcGEiLCJhIjoiY2s3cmI5YzUxMGQzcDNnbnJvYmd1M254aCJ9.OrASO83u3cOE0dwMeDjlbw&items=1`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Check URL or Internet Connection", undefined);
    } else if (body.features.length == 0) {
      callback("Please Enter the Correct Location", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        placeName: body.features[0].place_name
      });
    }
  });
};

module.exports = geoCode;
