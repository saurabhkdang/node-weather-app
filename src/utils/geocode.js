const request = require('postman-request')

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/search/geocode/v6/forward?q=" + encodeURIComponent(address) + "&access_token=pk.eyJ1Ijoic2F1cmFiaGRhbmciLCJhIjoiY20waThnc2hzMDZtMjJxc2JqeTU3Zzl0ZiJ9.qJb46SjdCrD02yVu0OtJSg&limit=1";
    request({url, json: true }, function(error, response, {features}){
        if(error) {
            callback('Unable to connect to geo services!', undefined)
        }else if(features.length === 0) {
            callback("Invalid query parameters", undefined)
        }else {
            callback(undefined, {
                longitude: features[0].properties.coordinates.longitude,
                latitude: features[0].properties.coordinates.latitude,
                location: features[0].properties.full_address
            })
        }
    })
}

module.exports = geocode