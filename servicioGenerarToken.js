//1. URI PARA DONDE VOY
const URI='https://accounts.spotify.com/api/token'

//2.Almaceno los datos que voy a enviar
let dato1='client_id=29e0734cd90342288bc031a5f8b1c8f8'
let dato2='client_secret=37ff3802aeb04d418a3b1c70637202f0'
let dato3='grant_type=client_credentials'

//3. Configuro la peticion
const PETICION={
    method:"POST",
    headers:{
        "Content-type":"application/x-www-form-urlencoded"
    },
    body:dato1+'&'+dato2+'&'+dato3
}

//4. Consumir el servicio
export async function generarToken(){

    //Proceso Asincrono
   let respuesta= await fetch(URI,PETICION)
   return (respuesta.json())

}