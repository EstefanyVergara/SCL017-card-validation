const validator = 
    function isValid(){
        let card=aux.reverse();
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


   














 
  