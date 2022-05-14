//PASOS PARA CONSUMIR UN API CON JS PURO

//DECLARO LA URI
const URI ="https://api.spotify.com/v1/artists/1i8SpTcr7yvPOmcqrbnVXY/top-tracks?market=US"

//2. DECLARA LOS PARAMETROS DE LA PETICION (QUE VOY HACER?)

const TOKEN="Bearer BQAYvP1Xu8eKxGug8FbqP9MvoR3FzAENzX6nmUE-VJAxi-t8-itpZPDdnzB3lpjyssL88Jt7g5qGFfzAyNB5K5dgz1wejyBzmmHYKilf4aVazpWEIicqm0taLuoFFuYY9Cd2uhgFv3Vc64I51_7GpZSdbf0_YA1jBY0"

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