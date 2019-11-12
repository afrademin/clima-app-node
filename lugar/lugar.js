const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': 'b505ccbbb4msh3073c3ebf327dadp1354b7jsn28889b1c91a0' }
    });


    const resp = await instance.get();

    if (resp.data.Results.length == 0) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }


    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    }

}


module.exports = {
    getLugarLatLng
}