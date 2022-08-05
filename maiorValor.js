const valor1 = 5;
const valor2 = 10;

if (valor1 > valor2) {
    console.log(valor1, ' é maior que', valor2);
}
else {
    console.log(valor2, ' é maior que', valor1);
}
 //OU

 let maiorValor = max(5,9);
 console.log(maiorValor);

 function max(numero1,numero2) {
    if(numero1 > numero2)
        return numero1;
    else return numero2;
 }