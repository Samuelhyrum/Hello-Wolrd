const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

// Adicione o código do exercício aqui:

//Primeira TASK

// const formatedBookNames = books.map((Array) => `${Array.name} - ${Array.genre} - ${Array.author.name}`);
// console.log(formatedBookNames);



//Segunda TASK

// const nameAndAge = (idade) => {
//     const newArray = {};
//     const rray ={};
//     newArray.age = idade.map((id) => id.releaseYear - id.author.birthYear);
//     rray.author = idade.map((aut) => aut.author.name);

//     return newArray, rray;

// };

// console.log(nameAndAge(books));


// const nameAndAge = books.map((autor) => {
//     const newArray = {};
//     newArray.age = autor.releaseYear - autor.author.birthYear;
//     newArray.author = autor.author.name;

//     return newArray
// });
// const ne = nameAndAge;
// ne.sort((a, b) => b.age < a.age ? 1 : -1);

// console.log(ne);

//Terceira task

// const fantasyOrScienceFiction = books.filter((genero)=> genero.genre === 'Fantasia' || genero.genre ==='Ficção Científica')
// console.log(fantasyOrScienceFiction);


//Quarta task

// const oldBooksOrdered = books.filter((old) => old.releaseYear < 1962);
// const result = oldBooksOrdered.sort((a, b) => b.releaseYear < a.releaseYear ? 1 : -1);
// console.log(result);


//Quinta task 

// const fantasyOrScienceFictionAuthors = books.filter((genero) => genero.genre === 'Fantasia' || genero.genre === 'Ficção Científica');
// const ordem = fantasyOrScienceFictionAuthors.map((alfa) => (
//     `${alfa.author.name}`
// ));
// const final = ordem.sort();
// console.log(final);

//Sexta Task

