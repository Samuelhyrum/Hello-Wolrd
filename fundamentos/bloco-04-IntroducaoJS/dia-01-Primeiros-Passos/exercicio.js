//Primeiro Programa
const a= 8;
const b= 7;

console.log('Resultado de A+B é:', a+b);
console.log('Resultado de A-B é:', a-b);
console.log('Resultado de A*B é:', a*b);
console.log('Resultado de A/B é:', a/b);
console.log('Resultado de A%B é:', a%b);

//Segundo Programa
const Numero1= 16;
const Numero2= 16;

if(Numero1>Numero2){
    console.log('Retorno do maior Numero:',Numero1);
}else if(Numero1==Numero2){
    console.log('Numeros iguais');
}else{
    console.log('Retorno do maior Numero:',Numero2);
}
//Terceiro Programa
const Num1=15;
const Num2=10;
const Num3=11;

if(Num3>Num2 && Num3>Num1){
    console.log('Retorno do maior Numero:',Num3);
}else if(Num2>Num3 && Num2>Num1){
    console.log('Retorno do maior Numero:',Num2);
}else{
    console.log('Retorno do maior Numero', Num1);
}

//Quarto Programa

const Var= 7;

if(Var>0){
    console.log('Numero positivo', Var);
}else if(Var<0){
    console.log('Numero negativo', Var);
} else {
    console.log('Valor Neutro:', Var);
}
//Quinto Programa

const Ang1=60;
const Ang2=60;
const Ang3=70;

if (Ang1+Ang2+Ang3==180){
    console.log('Os valores correspondem ao de um triangulo valido');
}else {
    console.log('Valor invalido');
}
//Oitavo Programa

const Valor1=16/2;
const Valor2=16/2;
const Valor3=12/2;

if( Valor1 %2 ==0 && Valor2 %2==0){
    console.log('Numero é par: True');
}else if(Valor2 %2==0 && Valor3 %2==0 ){
    console.log('Numero é par: True');
}else{
    console.log('Numero impar');
}

//Oitavo Programa só com 1 if

const Valor4=16/2;
const Valor5=11/2;
const Valor6=12/2;


if( Valor4 %2 ==0 && Valor5 %2==0 || Valor5 %2==0 && Valor6 %2==0){
    console.log('Numero é par: True');
}else{
    console.log('Numero impar');
}

