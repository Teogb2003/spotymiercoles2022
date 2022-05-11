//PASOS PARA CONSUMIR UN API CON JS PURO

//DECLARO LA URI
const URI ="https://api.spotify.com/v1/artists/64KEffDW9EtZ1y2vBYgq8T/top-tracks?market=US"

//2. DECLARA LOS PARAMETROS DE LA PETICION (QUE VOY HACER?)

const TOKEN="Bearer BQAx6Pqf38e5EdYZsO9rd1uPaqdEyV3znmbj4dIm6ol2HJPzl9917Gmp586BHFY5x9GJs8-Tjh4RZzi8gDyROUmMkX4Jv5t9UwxnRFYtnwhSEmdUEqRaAMhIiyydWmfMPxBLSxWGkq4-fQSg34RmO6MAmgHs6agJsrQ"

const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN} 
}

//3. DECLARO EL FECTH (VOY AL SERVIDOR OME)
fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)//Respuesta de un objeto
    console.log(respuesta.tracks)

    
    console.log(respuesta.tracks[0])
    console.log(respuesta.tracks[0].preview_url)
})
.catch(function(respuesta){
    console.log(respuesta)
})