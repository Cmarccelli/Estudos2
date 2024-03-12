 alert('Seja Bem Vindo!');
 let numeroMaximo = 100
 let numeroSecreto = parseInt (Math.random () * numeroMaximo +1) ;
 console.log (numeroSecreto);
 let chute ;
 let tentativas = 1;

 //Enquanto Não fou numero da sorte
 while (chute != numeroSecreto) { 
    chute = prompt(`Escolha um nº ente 1 e ${numeroMaximo}`);
    //Se o numero for igual 
    if (numeroSecreto == chute) { 
       break;
        
   } 
    else {
       if (chute>numeroSecreto) {
           alert (`o nº secreto é menor que ${chute}`);
       }
       else  {
           alert (`o nº secreto é maior que ${chute}`);
       }
       tentativas++;

 }
 
    
}
let palavraTentativas = tentativas > 1 ? 'tentativas' :'tentativa';
alert (`Você acertou, o nº da sorte é ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);
