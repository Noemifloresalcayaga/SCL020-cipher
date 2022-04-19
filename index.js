import cipher from './cipher.js';

document.getElementById("btn-codificador").addEventListener("click",
function (){ 
let codigo2 = document.getElementById("codigo2").value;
let desplazamiento2 = parseInt(document.getElementById("desplazamiento2").value);
alert(codigo2);
alert(desplazamiento2);


let resultado2 =cipher.encode(codigo2,desplazamiento2);
alert(resultado2);
document.getElementById("nuevo").value = resultado2;
true
});

document.getElementById("btn-decodificador").addEventListener("click",
function (){ 
let codigo = document.getElementById("codigo").value;
let desplazamiento1 = parseInt(document.getElementById("desplazamiento1").value);
alert(codigo);
alert(desplazamiento1);


let resultado =cipher.decode(codigo,desplazamiento1);
alert(resultado);
document.getElementById("paciente").value = resultado;
true
});

