// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     expect(10).toBe(5);
//     console.log('Deveria falhar!');
//     done();
//   }, 500);
// });

// const { expect } = require("expect");

// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     try {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//       done();
//     } catch (error) {
//       done();
//     }
//   }, 500);
// });

// EXEMPLO 1!!
// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     try {
//       expect(10).toBe(5);
//       console.log('Deveria falhar!');
//       done();
//     } catch (error) {
//       done(error); // Alteramos esta linha
//     }
//   }, 500);
// });

//////////// 

// EXEMPLO 2

// const asyncSum = (a, b, callback) => {
//   setTimeout(() => {
//     const result = a + b + 1;
//     callback(result);
//   }, 500);
// };

// test('Testando asyncSum, soma 5 mais 10', (done) => {
//   asyncSum(5, 10, (result) => {
//     try {
//       expect(result).toBe(15);
//       done();
//     } catch (error) {
//       done(error);
//     }
//   });
// });


// EXEMPLO 3 USANDO O METODO ATUAL NOSSO DE TESTES
// // cicles.test.js

// let cities = [];

// const addCity = (city) => {
//   cities.push(city);
// };

// const removeCity = (city) => {
//   cities = cities.filter((eachCity) => eachCity !== city);
// };


// cicles.test.js

// let cities = [];

// const addCity = (city) => {
//  cities.push(city);
// };

// const removeCity = (city) => {
//  cities = cities.filter((eachCity) => eachCity !== city);
// };

// test('Testa a função addCity', () => {
//   expect.assertions(4);
//   addCity('Campinas');
//   addCity('Goiania');
//   addCity('Recife');
//   expect(cities).toHaveLength(3);
//   expect(cities).toContain('Campinas');
//   expect(cities).toContain('Goiania');
//   expect(cities).toContain('Recife');
// });

// test('Testa a função removeCity', () => {
//   expect.assertions(4);
//   removeCity('Campinas');
//   expect(cities).toHaveLength(2);
//   expect(cities).not.toContain('Campinas');
//   expect(cities).toContain('Goiania');
//   expect(cities).toContain('Recife');
// });


//EXEMPLO USANDO O SETUP E TEARDOWN

// cicles.test.js

// let cities = [];

// const addCity = (city) => {
// cities.push(city);
// };

// const removeCity = (city) => {
// cities = cities.filter((eachCity) => eachCity !== city);
// };

// beforeEach(() => {
//   cities = ['Pindamonhangaba'];
// });

// afterEach(() => {
//   cities = [];
// });

// test('Testa a função addCity utilizando o beforeEach', () => {
//   expect.assertions(3);
//   addCity('Piraporinha');
//   expect(cities).toHaveLength(2);
//   expect(cities).toContain('Pindamonhangaba');
//   expect(cities).toContain('Piraporinha');
// });

// test('Testa a função removeCity utilizando o beforeEach', () => {
//   expect.assertions(2);
//   removeCity('Pindamonhangaba');
//   expect(cities).not.toContain('Pindamonhangaba');
//   expect(cities).toHaveLength(0);
// });]




// QUARTO EXEMPLO USANDO AGORA SETUP E TEARDOWN DENTRO DE BLOCOS DESCRIBES, INDIVIDUALIZNADO O USO DELES PRO PROPRIO BLOCO DESCRIBE ONDE ELE É DECLARADO


// cicles.test.js

// let cities = [];

// const addCity = (city) => {
// cities.push(city);
// };

// const removeCity = (city) => {
// cities = cities.filter((eachCity) => eachCity !== city);
// };

// describe('Agrupa o primeiro bloco de testes', () => {
//   beforeEach(() => {
//     cities = ['Pindamonhangaba'];
//   });

//   afterEach(() => {
//     cities = [];
//   });

//   test('Testa a função addCity dentro do primeiro bloco de testes', () => {
//     expect.assertions(3);
//     addCity('Piraporinha');
//     expect(cities).toHaveLength(2);
//     expect(cities).toContain('Pindamonhangaba');
//     expect(cities).toContain('Piraporinha');
//   });

//   test('Testa a função removeCity dentro do primeiro bloco de testes', () => {
//     expect.assertions(2);
//     removeCity('Pindamonhangaba');
//     expect(cities).not.toContain('Pindamonhangaba');
//     expect(cities).toHaveLength(0);
//   });
// });

// describe('Agrupa o segundo bloco de testes', () => {
//   beforeEach(() => {
//     cities = ['Tangamandapio'];
//   });

//   afterEach(() => {
//     cities = [];
//   });

//   test('Testa a função addCity dentro do segundo bloco de testes', () => {
//     expect.assertions(3);
//     expect(cities).toHaveLength(1);
//     expect(cities).not.toContain('Pindamonhangaba');
//     expect(cities).toContain('Tangamandapio');
//   });

//   test('Testa a função removeCity dentro do segundo bloco de testes', () => {
//     expect.assertions(2);
//     removeCity('Tangamandapio');
//     expect(cities).not.toContain('Pindamonhangaba');
//     expect(cities).toHaveLength(0);
//   });
// });


// test('Não deveria passar!', (done) => {
//   setTimeout(() => {
//     try {
//       expect('Java').toBe('JavaScript');
//       done();
//     } catch (error) {
//       done(error);
//     }
//   }, 500);
// });


//TESTE PRA DEIXAR LETRAS MAIUSCULAS 

// const uppercase = (str, callback) => {
//   setTimeout(() => {
//     callback(str.toUpperCase());
//   }, 500);
// };


// test('teste que verifique a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas.', (done) => {
//   uppercase('samuelhyrum', (upperCase) => {
//     expect(upperCase).toBe('SAMUELHYRUM');
//   });
//   done();
// });


//// Verifique se a importação do arquivo correto está sendo feita.
const { expect } = require("expect");
const { getPokemonDetails } = require("./exercise");

describe("A função getPokemonDetails", () => {

  test("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');
    function message(messageError, messageOak) {
      expect(messageError).toEqual(expectedError);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Bulbasau', message);
  });
  // expect(getPokemonDetails('Squirtlle')).toBe
});
describe("A função getPokemonDetails", () => {

  test("retorna um pokemon que existe no banco de dados", (done) => {
    const expectedResponse = "Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun";
    function poke(resposta, error) {
      expect(resposta).toEqual(expectedResponse);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', poke);
  });
});