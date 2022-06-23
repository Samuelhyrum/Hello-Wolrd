const numbers = [19, 21, 307, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); // 30

const numbers2 = [19, 21, 30, 3, 45, 22, 15];

// const findDivisibleBy3And5 = (numbers2) => numbers2 % 3 === 0 && numbers2 % 5 === 0;
// // Adiciona seu código aqu
// const findby = numbers2.find(findDivisibleBy3And5);

// console.log(findby);

// Refatorando exercício
const findby = numbers2.find((numbers2) => numbers2 % 3 === 0 && numbers2 % 5 === 0);
console.log(findby);







const names = ['João', 'Irene', 'Fernando', 'Mariaaaaa'];

// const findNameWithFiveLetters = (names) => names.split(' ');
// names.sort((a, b) => b.length - a.length)[0];


const findin = names.find((names) => names.split(' '),
names.sort((a, b) => b.length - a.length)[0]
);
// Adicione seu código aqui:


console.log(findin);