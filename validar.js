/* Armar una página HTML con un input de tipo texto y dos botones. Se propone en ese input ingresar "apellido(s), nombre(s)". 
El primer botón, titulado "Validar", va a pintar el borde del input de verde o de rojo según el contenido sea válido (para 
ser válido tiene que tener una (y solo una) coma, al menos 2 letras antes de la coma y al menos otras dos letras 
después de la coma (sin contar espacios que separen la coma del apellido). 
El segundo botón, titulado "Formatear", va a mostrar en un  <p> (que inicialmente está vacío) el mismo nombre pero escrito 
como "nombre(s) apellido(s)", es decir, invertidos y sin la coma. Pero solo los va a mostrar si la validación fue buena. 
Si la validación fue mala, muestra un texto (en el mismo p) que dice "dato no válido".
*/

const text = document.querySelector('input');
const parrafo = document.getElementById('formatear');
let flag;

document.getElementById('myBtn').addEventListener("click", () => {
    let textoAValidar = text.value;

    if (textoAValidar.indexOf(",") === -1 || textoAValidar.split(',').length != 2) { //Valido que haya solo una coma.
        console.log('Falta la coma');
        text.style.border = "2px solid red";
        flag = false;
    } else if (textoAValidar.indexOf(",") < 2 || (textoAValidar[textoAValidar.indexOf(",") + 3]) == undefined) { //Valido que haya aunque sea 2 caracteres detras y adelante de la coma
        console.log("Error de validacion");
        text.style.border = "2px solid red";
        flag = false;
    } else {
        console.log("todo ok");
        text.style.border = "2px solid green";
        flag = true;
    }
    // hago un eventlistener para el boton Formatear, que depende del flag
    document.getElementById('myFormat').addEventListener('click', () => {
        if (flag)
            parrafo.innerHTML = textoAValidar.split(',')[1] + ' ' + textoAValidar.split(',')[0];
        else
            parrafo.innerHTML = 'Dato no valido'
    });
});