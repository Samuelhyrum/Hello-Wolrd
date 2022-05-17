let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index=0; index < numbers.length; index +=1 ){
    console.log(numbers[index]);
}
//Segundo exercicio

let numeros= [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (var index =0; index<numeros.length;index+=1){
    soma += numeros[index]
}
console.log(soma);

//Terceiro Exercicio

let num= [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let som = 0;

for (var index =0; index<num.length;index+=1){
    som += num[index]/11;
}
console.log(som);

//Quarto Exercicio

let number= [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let son = 0;

for (var index =0; index<number.length;index+=1){
    son += number[index]/11;
}
console.log(son);

if( son>20){
    console.log('Valor maior que 20');
}else{
    console.log('Valor menor ou igual a 20');
}

//Quinta Exercicio

let numBers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var maiorNumero = 0;

for(var index=0; index< numBers.length;index+=1){

    var numb = numBers[index]

    if(numb>maiorNumero){
        maiorNumero = numb;
    }
}

console.log(maiorNumero);

