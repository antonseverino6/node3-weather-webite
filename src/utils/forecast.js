const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/97769464676d6334c671e9d75aae0a6f/'+ latitude +','+ longitude +'?units=si'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const temp = body.currently.temperature
            const precipProb = body.currently.precipProbability
            const windSpeed = body.currently.windSpeed
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + temp + ' degrees out. There is a ' + precipProb + '% chance of rain. Wind speed is ' + windSpeed)
        }
    })

}

module.exports = forecast

