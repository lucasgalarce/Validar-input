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