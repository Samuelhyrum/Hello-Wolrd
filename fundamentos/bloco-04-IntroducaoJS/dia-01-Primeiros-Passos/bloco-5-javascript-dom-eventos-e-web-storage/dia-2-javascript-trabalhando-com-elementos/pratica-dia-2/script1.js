//Task 1 
let body = document.querySelector('body');
let h1 = document.createElement('h1');
body.appendChild(h1);
h1.innerText = "Exercício 5.2 - JavaScript DOM";

//Task 2 
let main = document.createElement('main');
body.appendChild(main);
main.className = "main-content";

//Task 3 
let section = document.createElement('section');
main.appendChild(section);
section.className = "center-content";