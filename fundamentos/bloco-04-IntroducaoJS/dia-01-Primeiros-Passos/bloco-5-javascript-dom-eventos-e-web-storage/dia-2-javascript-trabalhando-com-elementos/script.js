// arquivo script.js
//Task 1
document.querySelector("#lementoOndeVoceEsta");

// Task 2
let x = document.querySelector('#pai');
x.style.backgroundColor = 'red';

// Task 3 
document.querySelector('#primeiroFilhoDoFilho').innerText = "Olá";

//Task 4
document.querySelector('#pai').firstElementChild;

// Task 5
document.querySelector('#elementoOndeVoceEsta').previousElementSibling;

//Task 6
document.querySelector('#elementoOndeVoceEsta').nextSibling;

//Task 7 
document.querySelector('#elementoOndeVoceEsta').nextElementSibling;

//Task 8
document.querySelector('#pai').lastElementChild.previousElementSibling;

//Task 9
let adotado = document.querySelector('#pai');
let postiço = document.createElement('section');
adotado.appendChild(postiço);

//Task 10 
let filho = document.querySelector("#elementoOndeVoceEsta");
let MaisVelho = document.createElement('section');
filho.appendChild(MaisVelho);

//Task 11 
let Painho = document.querySelector('#primeiroFilhoDoFilho');
let hijo = document.createElement('section');
Painho.appendChild(hijo);

//Task 12 
hijo.parentNode.parentNode.nextElementSibling;





console.log(document.getElementById('start').nextSibling) // nó

console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>