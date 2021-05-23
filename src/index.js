import validator from './validator.js';

console.log(validator);



function maskify() {
  let card = document.getElementById("cardNumber").value;
  card=card.split("");
  for (i=0; i<card.length; i++){
    card[i]=parseInt(card[i]);
   }
   let hideNum = [];
   for(let i = 0; i < card.length; i++){
     if(i < card.length-4){
       hideNum.push("#");
    }else{
       hideNum.push(card[i]);
     }
    }
    document.getElementById("cardNumber").value  = hideNum.join("");
  }

 
