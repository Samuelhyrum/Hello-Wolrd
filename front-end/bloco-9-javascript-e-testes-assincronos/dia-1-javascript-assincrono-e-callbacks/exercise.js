//EXERCICIOS DO 1 A 2

// const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
//   `${name} is ${value} ${measurementUnit} apart from the Sun`;

// const mars = {
//   name: "Mars",
//   distanceFromSun: {
//     value: 227900000,
//     measurementUnit: "kilometers",
//   },
// };

// const venus = {
//   name: "Venus",
//   distanceFromSun: {
//     value: 108200000,
//     measurementUnit: "kilometers",
//   },
// };

// const jupiter = {
//   name: "Jupiter",
//   distanceFromSun: {
//     value: 778500000,
//     measurementUnit: "kilometers",
//   },
// };

// console.log(planetDistanceFromSun(mars)); // A
// console.log(planetDistanceFromSun(venus)); // B
// console.log(planetDistanceFromSun(jupiter)); // C



//EXERCICIO 3


// const getPlanet = () => {
//   const mars = {
//     name: "Mars",
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: "kilometers",
//     },
//   };
//   console.log("Returned planet: ", mars);
// };

// setTimeout(()=> getPlanet(), 4000); // imprime Marte depois de 4 segundos



//EXERCICIO 4

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo
// const sendMarsTemperature = (temp) => {
//     console.log(`Mars temperature is: ${temp} degree Celsius`);
// };

// setTimeout(() => sendMarsTemperature(getMarsTemperature()), messageDelay()); // imprime "Mars temperature is: 20 degree Celsius", por exemplo


//EXERCICIO 5


// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// // definição da função sendMarsTemperature...
// const sendMarsTemperature = (temp) => {
//     console.log(temp);
// };

// setTimeout(() => sendMarsTemperature(temperatureInFahrenheit(getMarsTemperature())), messageDelay()); // imprime "It is currently 47ºF at Mars", por exemplo
// setTimeout(() => sendMarsTemperature(greet(getMarsTemperature())),messageDelay()); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo


//EXERCICIO 6


// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// }

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// const handleError = (errorReason) =>
//   console.log(`Error getting temperature: ${errorReason}`);

// // definição da função sendMarsTemperature...
// const sendMarsTemperature = (sucess, error) => {
//   setTimeout (() => {
//     const didOperationSucceed = Math.random() >= 0.6;
//     if(didOperationSucceed){
//       sucess(getMarsTemperature());
//     } else {
//       error('Robot is busy');
//     }
//   }, messageDelay());
// }

// // imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(temperatureInFahrenheit, handleError);

// // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(greet, handleError);


//EXERCICIO 7


// const uppercase = (str, callback) => {
//     setTimeout(() => {
//       callback(str.toUpperCase());
//     }, 500);
//   };


//   test('teste que verifique a chamada da callback de uma função uppercase, que transforma as letras de uma palavra em letras maiúsculas.', (done) => {
//     uppercase('samuelhyrum', (upperCase) => {
//       expect(upperCase).toBe('SAMUELHYRUM');
//     });
//     done();
//   });


//EXERCICIO 8


const pokemons = [
    {
        name: 'Bulbasaur',
        type: 'Grass',
        ability: 'Razor Leaf',
    },
    {
        name: 'Charmander',
        type: 'Fire',
        ability: 'Ember',
    },
    {
        name: 'Squirtle',
        type: 'Water',
        ability: 'Water Gun',
    },
];

function getPokemonDetails(filter, callback) {
    setTimeout(() => {
        if (pokemons.find(filter) === undefined) {
            return callback(new Error('Não temos esse pokémon para você :('), null);
        }
        const pokemon = pokemons.find(filter);

        const { name, type, ability } = pokemon;

        const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;
        //    console.log(messageFromProfOak);
         callback(messageFromProfOak);
    }, 2000);
}

const param = parametro => parametro.name === 'Squirtle';

getPokemonDetails(param, (callback) => {
    console.log(callback);
});

module.exports = {
    getPokemonDetails,
};

