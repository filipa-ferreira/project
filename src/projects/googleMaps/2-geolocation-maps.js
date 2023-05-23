

let geoBtn = document.querySelector('#geoBtn');
let output = document.querySelector('#output');


geoBtn.addEventListener('click', lerCoordenadas, false);


function lerCoordenadas(){

    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(initMap, error);
    }

}


function initMap({coords}){

    const {latitude: lat, longitude: lng, altitude, accuracy} = coords;

    output.innerHTML = `
        <h1> Latitude: ${lat}</h1>
        <h1> Longitude: ${lng}</h1>
        <h1> Precisão: ${accuracy}</h1>
    `;

    let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat, lng},//ES9 shorthand properties
        zoom:14,
    })
}

function error(error){
    console.log(`ERRO: ${error.code}, ${error.message}`);
}
