const axios = require("axios");
const HttpError = require("../models/http-error");

const API_KEY = "a26214cd2ddd898098fb0fb40ddf391a";

async function getCoordsForAddress(address) {
    const response = await axios.get(`http://api.positionstack.com/v1/forward?access_key=${API_KEY}&query=${encodeURIComponent(address)}`)
    const data = response.data.data[0];
    if(!data || data.error) {
       const error = new HttpError('Could not find location for the specified address.', 422);
       throw error;
    }
    const coordinates = data;
    return {
        lat: coordinates['latitude'],
        lng: coordinates['longitude']
    }
}

module.exports = getCoordsForAddress;