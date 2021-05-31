<<<<<<< HEAD
let aux=[];
function maskify(tarjeta) {
    let card = tarjeta;
    aux.push(card[card.length-1]);
    card=card.split("");
    let hideNum = [];
     for(let i = 0; i < card.length; i++){
       if(i < card.length-4){
         hideNum.push("#");
      }
      else{
         hideNum.push(card[i]);
       }
      }
        return hideNum.join("");
    }
   
   function isValid(tarjeta){
        let booleano="";
        let card=tarjeta.reverse();
        
=======
const validator = 
    function isValid(){
        let card=aux.reverse();
>>>>>>> 8669bba81eaded8f62670bebafcea23de41fcba3
        for (i=0; i<card.length; i++){
          card[i]=parseInt(card[i]);
         }
        for (j=1; j<card.length; j+=2){
           card[j]=card[j]*2;
           card[j]=(card[j]-1)%9+1;
         }
          let adition=0;
          for (i=0; i<card.length; i++){
            adition=adition+card[i];
          }
<<<<<<< HEAD
          let referencia=adition%10;
          if(referencia==0){
              booleano=true;
          }else{
              booleano=false;            
          }  
          return booleano;
       }
 
  
      const validator= {aux,maskify,isValid};
      export default validator;
      
=======
          let sum=adition;
          let referencia=sum%10;
          if(referencia==0){
              alert("Pago aceptado!!");
          }else{
                alert("Tarjeta inválida intente nuevamente");
                hideNum = [];
                document.getElementById("textElement").value  = hideNum;
                aux=[];
          }
       }


   














 
  
>>>>>>> 8669bba81eaded8f62670bebafcea23de41fcba3
