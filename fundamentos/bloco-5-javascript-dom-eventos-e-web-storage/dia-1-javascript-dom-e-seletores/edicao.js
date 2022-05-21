//Primeira task
document.getElementsByClassName("paragrafo")[1].innerText= " Me vejo daqui a 2 anos tentando ser melhor a cada código, a cada aprendizado";

//Segunda task
let main = document.getElementsByClassName("main-content");
main[0].style.backgroundColor = "yellowgreen"

// Teicera task
let center = document.getElementsByClassName("center-content")
center[0].style.backgroundColor = "white";

//Quarta task
document.getElementsByTagName("h1")[0].innerText = "Quarta task em pleno sabadão";

//Quinta task
let p = document.getElementsByTagName("p")[0].innerText;
console.log(p.toUpperCase());

//Sexta task
let x = document.getElementsByClassName("paragrafo");

for(index=0; index<x.length; index+=1){
    console.log(x[index]);
}

