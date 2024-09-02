const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=70e1f2ee9803536a95cf6c716a027ff4&query=" + latitude +","+longitude + "&units=f"
    // console.log(url, latitude, longitude);
    // return
    request({url, json: true}, function (error, response, body) {//, body
        // console.log('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // console.log('body:', body); // Print the HTML for the Google homepage.
        // const data = JSON.parse(body)
        // console.log(response.body)
        // return
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        }else if(body.error){
            callback(body.error.info, undefined)
        }else{
            // console.log(response.body)
            callback(undefined, body.current.weather_descriptions[0]+". It is currently "+body.current.temperature+" degrees out. It feels like "+body.current.feelslike+" degrees out.")
        }
    });
  }

  module.exports = forecast