import {obtenerCanciones} from './ServicioGenerarCanciones.js'

import {pintarCanciones} from './pintarCanciones.js'


//Llamar a la funcion generar token
let canciones=await obtenerCanciones()

//Llamar la funcion pintarCanciones
pintarCanciones(canciones.tracks)