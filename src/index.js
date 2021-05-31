import validator from './validator.js';
 
let cardNumber=document.getElementById("cardNumber");
cardNumber.addEventListener("keyup",(e)=>{
    let creditCardNumber=e.target.value;
    cardNumber.value=validator.maskify(creditCardNumber);
});
 
document.getElementById("btnPay").addEventListener("click",()=>{
    let creditCardNumber=validator.aux;
    if(validator.isValid(creditCardNumber)==true){
       alert("Tarjeta valida");   
    } else{
       if(confirm("Tarjeta inválida reintente")){
        window.location.reload();
    }
    
}
}
)



     
