const axios = require('axios');


const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=b032d2f76ae593f248e20b1e1352fbac&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}