import cipher from './cipher.js';

document.getElementById("btn-mas").addEventListener("click",
function(){
    /* Funcion para que al hacer click en el boton aparezca el contenedor */
    let nuevoPaciente = document.getElementById("nuevo-paciente")
    /*guardar la section de html para despues trabajarla 
    de forma mas ordenada */
    nuevoPaciente.style.display = "block";
});

document.getElementById("btn-codificador").addEventListener("click",
function () { 
    /* funcion para que al hacer click en el boton
    se traigan los valores de ambos elementos  */
let codigo2 = document.getElementById("codigo2").value;
let desplazamiento2 = parseInt(document.getElementById("desplazamiento2").value);

/* indica que resultado sera igual a la funcion */
let resultado =cipher.encode(desplazamiento2, codigo2) 
/* indica que el valor de nuevo sera resultado */
document.getElementById("nuevo").value = resultado; 
alert (`El codigo de su nueva paciente ${codigo2}, es: ${resultado}`);

});

document.getElementById("btn-decodificador").addEventListener("click",
function () { 
let codigo = document.getElementById("codigo").value;
let desplazamiento1 = parseInt(document.getElementById("desplazamiento1").value);



let resultado =cipher.decode(desplazamiento1, codigo);
document.getElementById("paciente").value = resultado;
alert(`Paciente: ${resultado} Inicio: 06/04/2022`);

});

