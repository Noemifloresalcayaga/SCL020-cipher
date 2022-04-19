const cipher = {
  encode: (codigo2,desplazamiento2) => {
   let resultado2 = "";
   let letras2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

   desplazamiento2 = ((desplazamiento2 % 26 ) + 26) % 26;

   if(codigo2) {
     for(let i=0; i < codigo2.length; i++){
        if(letras2.indexOf(codigo2[i])  != -1 ){
           let posicion2 = ((letras2.indexOf(codigo2[i]) + desplazamiento2)%26);
           
           resultado2 += letras2[posicion2];
         }
        else{
           resultado2 += codigo2[i];
       }
    }
   }
  return resultado2;
  },

  decode: (codigo,desplazamiento1) => {
    let resultado = "";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    desplazamiento1 = ((desplazamiento1 % 26 ) - 26) % 26;

    if(codigo) {
     for(let i=0; i < codigo.length; i++){
       if(letras.indexOf(codigo[i])  != -1 ){
          let posicion = ((letras.indexOf(codigo[i]) - desplazamiento1)%26);
          
          resultado += letras[posicion];
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













  