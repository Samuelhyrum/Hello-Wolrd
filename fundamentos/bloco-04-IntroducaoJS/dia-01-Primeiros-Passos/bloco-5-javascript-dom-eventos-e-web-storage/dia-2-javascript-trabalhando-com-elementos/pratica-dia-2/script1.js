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

//Task 4 
let paragrafo = document.createElement('p');
section.appendChild(paragrafo);
paragrafo.innerText = "Primeiro Texto";

//Task 5 
let section1 = document.createElement('section');
main.appendChild(section1);
section1.className = "left-content";

//Task 6 
let section2 = document.createElement('section');
main.appendChild(section2);
section2.className = "right-content";

//Task 7 
let imagem = document.createElement('img');
section1.appendChild(imagem);
imagem.src = "https://picsum.photos/200 ";
imagem.className = "small-image";

//Task 8
let numeros = [
    'Um',
    'Dois',
    'Três',
    'Quatro',
    'Cinco',
    'Sexto',
    'Sete',
    'Oito',
    'Nove',
    'Dez',
]
let ul = document.createElement('ul');
section2.appendChild(ul);
ul.className = "lista";

let lista = document.querySelector('.lista');

for(let i =0; i<numeros.length;i+=1){
    let item = numeros[i];

    let novoItem =document.createElement('li');
    novoItem.innerText = item;
    
    lista.appendChild(novoItem);
}






