const request = require("request");
const chalk = require("chalk");

const forecast = function(latitute, longitude, callback) {
  const url = `https://api.darksky.net/forecast/f5adc5cf5d1844e0872ea7a8a889ebee/${latitute},${longitude}?units=si`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback(
        "Unable to fetch the Url, Check Url or internet connection",
        undefined
      );
    } else if (body.code == 400) {
      callback(body.error, undefined);
    } else {
      callback(
        undefined,

        `${body.daily.data[0].summary}. The Current Temperature is ${body.currently.temperature}.The Chance of rain is ${body.currently.precipProbability}`
      );
    }
  });
};

module.exports = forecast;
