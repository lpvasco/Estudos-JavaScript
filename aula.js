// const valorIngressoAdulto = 20;
// valorIngressoAdulto = 30;
// console.log(valorIngressoAdulto)

// let nome = 'Rafael'; //string
// let idade = 25; //number
// let estaAproavdo = true; //boolean
// let corSelecionado = null; //redefinir um valor
// let sobrenome = undefined; //undefined

// let pessoa = {
//     nome: 'Rafael',
//     idade: 25,
//     estaAproavdo: true,
//     sobrenome: 'de souza',
// };
// console.log(pessoa);

//Arrays
// let familia = [true,45,'Lucas',17];
// console.log(familia.length);
// console.log(familia[1]);
// let Ryan = ['Ryan',18,'Santo André',]
// console.log(Ryan);

// Functions
// Verbo + Substantivo
// let corSite = "azul";
// function resetaCor(cor,tonalidade){
//     corSite = cor + ' ' + tonalidade;
// };

// console.log(corSite);
// resetaCor("verde","claro")
// console.log(corSite);

// //Functions Diversas
// //Realizar tarefa, nao devolve nada
// function dizerNome(){
//     console.log('lucas');
// }
// dizerNome();
// //Faz um calculo ou operação e RETORNAA algo
// function multiplicarPorDois(valor){
//     return valor* 2;
// }
// let resultado = multiplicarPorDois(6);
// console.log(resultado);

//operadores aritiméticos(matematicos)
//operadores atribuição
//operadores de comparação
//operadores logicos
//operadores bitwise
//ARTIMETICOS
// let salario = 100;
// console.log(salario + salario);
// console.log(salario - salario);
// console.log(salario * salario);
// console.log(salario / salario);
// console.log(2 ** salario);
// let idade = 18;
// console.log(++idade);
// console.log(--idade);
// console.log(--idade);

// //ATRIBUIÇÃO
// let valorTecladoGamer = 100;
// // += é a variavel + a variavel
// // -= é a variavel - a variavel
// valorTecladoGamer += valorTecladoGamer;
// console.log(valorTecladoGamer);

// //operadores de igualdade
// //igualdade completa *MAIS RECOMENDADA*
// console.log(1 === 1);
// console.log('1' === 1);
// //igualdade solta, se for diferente ele iguala *nao recomendado*
// console.log('1' == 1);

// // Tem um cliente, 100 pts = premium, caso contrario comum
// let pontos = 130;
// let tipo = pontos > 100 ? 'premium' : 'comum';
// console.log(tipo);

//operadores logico
// e (&&) = retorna true se os dois operandos forem true
// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
// console.log(podeAplicar)
//ou (││ *alt + 4 cliques no num 5) retorna true se 1 for true
// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
// console.log(podeAplicar);
//not (!)
// let maiorDeIdade = false;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
// let candidatoRecusado = !podeAplicar;
// console.log('candidato recusado:',candidatoRecusado);
//boolean
//false = undefined, null ,0 ,false ,'', NaN

//IF ELSE
//se a hora estiver entre 06 ate 12, exibira bom dia, se tiver 12 ate 18
//sera boa tarde, se nao boa noite
// let hora = 7;

// if (hora >= 6 && hora < 12) {
//     console.log('Bom dia');
// }
// else if (hora >= 12 && hora < 18) {
//     console.log('boa tarde')
// }
// else {
//     console.log('boa noite')
// }

//SWITCH...CASE
// let permissao; //comum, gerente ou diretor
// permissao = 'diretor';

// switch (permissao) {
//     case 'comum':
//     console.log('user comum');
//     break;
    
//     case 'gerente':
//     console.log('user gerente');
//     break;

//     case 'diretor':
//     console.log('user diretor');
//     break;

//     default:
//     console.log('NAO RECONHECIDO');
// } 

//LOOP OU LAÇOS FOR, WHILE, DO...WHILE, FOR...IN, FOR..OF
//FOR
// for(let i = 1;i <= 10;i++) {
//     if(i % 2 !== 0) {
//         console.log(i);
//     }
// }

//WHILE loop
// let i = 10;

// while (i >= 1,i--) {
//     if(i % 2 !==0) {
//         console.log(i)
//     }
// }

//DO WHILE
// let i = 1;
// do {
//     console.log('estou digitando', i);
//     i++;
// } while (i <= 20)

//FOR..IN
// const pessoa = {
//     nome: 'lucas',
//     idade: 18
// };

// for(let chave in pessoa) {
//     console.log(chave);
// }

// const cores = ['blue','orange','green'];

// for (let indice in cores) {
//     console.log(indice,cores)
// }

//for-of
// const cores = ['blue','orange','green'];

// for(let cor of cores) {
//     console.log(cor);
// }