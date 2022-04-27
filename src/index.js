import cipher from './cipher.js';

document.getElementById("btn-mas").addEventListener("click",
function(){
    let nuevoPaciente = document.getElementById("nuevo-paciente")
    nuevoPaciente.style.display = "block";
});

document.getElementById("btn-codificador").addEventListener("click",
function (){ 
let codigo2 = document.getElementById("codigo2").value;
let desplazamiento2 = parseInt(document.getElementById("desplazamiento2").value);



let resultado =cipher.encode(desplazamiento2, codigo2);
alert("El codigo de su nueva paciente Carmen Gutierrez, es: HFWRJS LZYNJWWJE");
document.getElementById("nuevo").value = resultado;

});

document.getElementById("btn-decodificador").addEventListener("click",
function (){ 
let codigo = document.getElementById("codigo").value;
let desplazamiento1 = parseInt(document.getElementById("desplazamiento1").value);



let resultado =cipher.decode(desplazamiento1, codigo);
alert("Paciente: Veronica Rodriguez Inicio: 06/04/2022");
document.getElementById("paciente").value = resultado;

});

