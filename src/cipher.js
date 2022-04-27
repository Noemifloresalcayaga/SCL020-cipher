
const cipher = {
  encode: (desplazamiento2, codigo2) => {
    
   let resultado = "";
   let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let codigo = codigo2.toUpperCase();
   if(codigo) {
     for(let i=0; i < codigo.length; i++){
       console.log([i])
       /* definiendo la  condicion de que cada valor de cada letra 
       que pase por el ciclo for se encuentre dentro de la variable letras*/
        if(letras.indexOf(codigo[i])  != -1 ){
          /*definiendo la variable ascii para asignar al valor de cada letra
          su codigo ascii */
           let ascii = codigo.charCodeAt(i);
          /* definiendo la variable posicion para aplicar la formula de cifrado (se resta 
          valor ascii menos 65 que es la primera posicion del codigo ascii,
          se suma el valor del offset* el residuo de 26 es para dar las vueltas en el alfabeto */
           let posicion = String.fromCharCode ((ascii - 65 + desplazamiento2)% 26 + 65);
          
           /* incremento del valor de resultado con el valor de  posicion*/
           resultado += posicion; 
         }
        else{
          /* si el valor no se encuentra el resultado se incrementa con el texto
          a cifrae*/                                                      
           resultado += codigo[i];
       }
    }
   }
  return resultado;
  },

  decode: (desplazamiento1, codigo) => {
    let resultado = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(codigo) {
     for(let i=0; i < codigo.length; i++){
       if(letras.indexOf(codigo[i])  != -1 ){
          
         let ascii = codigo.charCodeAt(i);
         let posicion = String.fromCharCode ((ascii + 65 - desplazamiento1) % 26 + 65);
          
          resultado += posicion;
        }
       else{
          resultado += codigo[i];
      }
   }
  }
 return resultado;
 }
};
export default cipher;













  