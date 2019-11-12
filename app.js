const lugar = require('./lugar/lugar.js');

const clima = require('./clima/clima.js');

const colors = require('colors');

const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para obtener el clima',
            demand: true
        }
    }).argv
    //argv.direccion


const getInfo = async(direccion) => {

    /*  const dir = await lugar.getLugarLatLng(direccion).then(resp => {
         const cl = clima.getClima(resp.lat, resp.lng).then(resp2 => {
             return `El clima de ${resp.dir} es de ${resp2}`;
         }).catch(console.log)
     }).catch(console.log); */


    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${direccion} es de ${temp}ºC`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`.red;
    }


    // El clima de XXXXXXXXXXx es de XX
    // No se pudo determinar el clima de XXXXX
}


//lugar.getLugarLatLng(argv.direccion).then(console.log);

/* clima.getClima(35, 139)
    .then(console.log)
    .catch(console.log); */

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)