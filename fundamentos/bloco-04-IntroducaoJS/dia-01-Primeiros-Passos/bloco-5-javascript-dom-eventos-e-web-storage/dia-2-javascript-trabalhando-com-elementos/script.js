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







console.log(document.getElementById('start').nextSibling) // nó

console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>