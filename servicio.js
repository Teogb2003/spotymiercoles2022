//PASOS PARA CONSUMIR UN API CON JS PURO

//DECLARO LA URI
const URI ="https://api.spotify.com/v1/artists/4c7ssQj66cEGMq6viiJdTZ/top-tracks?market=US"

//2. DECLARA LOS PARAMETROS DE LA PETICION (QUE VOY HACER?)

const TOKEN="Bearer BQCHlr9sjf0Y4b6tEOvZYhjasZXPcQkEeE1TRoQXwhoCYks0IkIfn4tYIPYTVjRndQkrkfcYebJ2wWLhiftOAzBf8pNsTrd0a8z-1uVk4HLJP7c-LJt9uWiVuIfC6NDuDQERw3IxbQ23l4UJL8mQ8evX-LfOlml57N0"

const PETICION={
    method:"GET",
    headers:{Authorization:TOKEN} 
}



//Rutina para consumir API con metodo POST
//1. URI PARA DONDE VOY
const URIPOST='https://accounts.spotify.com/api/token'

//2.Almaceno los datos que voy a enviar
let dato1='client_id=29e0734cd90342288bc031a5f8b1c8f8'
let dato2='client_secret=37ff3802aeb04d418a3b1c70637202f0'
let dato3='grant_type=client_credentials'

//3. Configuro la peticion
const PETICIONPOST={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+'&'+dato2+'&'+dato3
}

//4. Voy al servidor a consumir el servicio
fetch(URIPOST,PETICIONPOST)
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){
    console.log(respuesta)
    let token=respuesta.token_type+' '+respuesta.access_token
     console.log(token)
})
.catch(function(respuesta){
    console.log(respuesta)
})





//3. DECLARO EL FECTH (VOY AL SERVIDOR OME)
/*fetch(URI,PETICION)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)//Respuesta de un objeto
    console.log(respuesta.tracks)//Arreglo de 10 canciones
    pintarCanciones(respuesta.tracks)

})
.catch(function(respuesta){
    console.log(respuesta)
})

//FUNCION PARA RECORRER UN ARREGLO
function pintarCanciones(canciones){
    let fila=document.getElementById("fila")
    canciones.forEach(function(cancion){
       //console.log(cancion)
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

       //Rutina para llenado
       let columna=document.createElement("div")
       columna.classList.add("col")

       let tarjeta=document.createElement("div")
       tarjeta.classList.add("card", "h-100", "shadow")

       let audio=document.createElement("audio")
       audio.classList.add("w-100")
       audio.setAttribute("controls", "controls")
       audio.src=cancion.preview_url

       let foto=document.createElement("img")
       foto.classList.add("w-100", "img-fluid")
       foto.src=cancion.album.images[0].url

       //Padres e hijos
       tarjeta.appendChild(foto)
       tarjeta.appendChild(audio)
       columna.appendChild(tarjeta)
       fila.appendChild(columna)
    })
    
   
    
}*/
