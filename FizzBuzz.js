// return Fizz se o valor for divisivel por 3
//return Buzz se o valor for divisivel por 5
const num = 0;
const resultado = fizzBuzz(15);
    console.log(resultado);

function fizzBuzz(input){
    if(typeof input !== 'number')
        return 'Não é um número'
    else if(input % 3 === 0 && input % 5 === 0)
        return 'FizzBuzz';
    else if(input % 3 === 0)
        return 'Fizz';
    else if(input % 5 === 0)
        return 'Buzz';
    return input;
}