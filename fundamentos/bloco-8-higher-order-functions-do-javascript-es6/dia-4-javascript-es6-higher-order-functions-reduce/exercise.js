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

//Primeira Task
// const arrays = [
//     ['1', '2', '3'],
//     [true],
//     [4, 5, 6],
// ];
// const flatten = arrays.reduce((list, sub) => list.concat(sub), []);
// console.log(flatten);

//Segunda Task
// const gettin = books.map((b) => b.author.name);
// const get = gettin.reduce((p, r) => {
//     return `${p}, ${r}`;
// });
// console.log(get);

//Terceira Task
// const med = books.map((idade) => idade.releaseYear - idade.author.birthYear);

// const opa = (media) => {
//     return media.reduce((o, a) => {
//         return o + a % 1;
//     });
// }
// console.log(opa(med));

//Quarta Task

function longestNamedBook(book) {
    return book.reduce((a, b) => {
        if (a.name.length < b.name.length){
            a = b;
        }
        return a;
    });
}

console.log(longestNamedBook(books));

// function maior() {
//     let nameBook = 'O Chamado de Cthulhu';
//     books.forEach((book) => {
//       if (book.name.length > nameBook.length) {
//         nameBook = book;
//     }})
//     return nameBook;
//   }
//   console.log(maior());

