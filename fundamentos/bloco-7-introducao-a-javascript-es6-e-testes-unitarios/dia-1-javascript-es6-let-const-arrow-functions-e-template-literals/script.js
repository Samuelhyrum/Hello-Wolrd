if (true) {
    // inicio do escopo do if
    var userAge = '20';
    console.log(userAge); // 20
    // fim do escopo do if
}
console.log(userAge); // 20



var userName = 'Isabella';
var userName = 'Lucas';
console.log(userName); // Resultado: Lucas


let favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition


const userInfo = {
    name: 'Cláudio',
    id: '5489-2',
    email: 'claudio@email.com',
};

userInfo.name = 'João';

console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }



const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'HTML', 'React']
console.log(technologies); // Erro


const myName = 'Samuel';
console.log(`Welcome ${myName} Hyrum !`);

function hello() {
    let s = ["Hello World!", "Olá Mundo!"];
    console.log(s[0]);
}


var clickcountCount = 0;
const btn = document.getElementById("btn");
const disp = document.getElementById("display");

btn.addEventListener("click", function () {
    clickcountCount++;
    disp.innerHTML = clickcountCount;
});




const Template = (nome) => {
    const frase = { prim: "Trybe", seg: "x", ter: "aqui" }
    frase.seg = nome;
    console.log(`${frase.prim} ${frase.seg} ${frase.ter}`);
}
Template("samuel");