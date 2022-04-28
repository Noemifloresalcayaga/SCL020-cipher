
const cipher = {
  encode: (desplazamiento2, codigo2) => {
    
   let resultado = "";
   let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let codigo = codigo2.toUpperCase();
   if(codigo) {
     /*permite que pueda recorrer el texto ingresado hasta la ultima letra
     ingresada sumandole uno en cada ciclo.Si no tuviese la condicion no
     pararia de recorrer */
     for(let i=0; i < codigo.length; i++){ 
       /* se asocia el ciclo con la variable letras para que se devuelva el
       valor de la posicion de cada letra  */ 
       if(letras.indexOf(codigo[i])  != -1 ){
        /*permite obtener un numero para cada posicion de cada letra */
           let ascii = codigo.charCodeAt(i);
           /* se utiliza el numero para realizar la formula de cifrado
           se devuelve la nueva letra  */
           let posicion = String.fromCharCode ((ascii - 65 + desplazamiento2)% 26 + 65);
           
           /*permite que cada nueva letra se sume a la siguiente nueva letra */
           resultado += posicion; 
         }
        else{
           /* indica que si existe un valor que no se encuentra
           en letras se devuelva sin cambios */                                                
           resultado += codigo[i];
       }
    }
   }
   /* se obtiene la nueva palabra */
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













  