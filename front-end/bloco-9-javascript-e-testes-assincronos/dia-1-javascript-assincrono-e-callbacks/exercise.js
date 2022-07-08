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

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9 / 5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...

const sendMarsTemperature = (temp, error) => {
  const didOperationSucceed = Math.random() >= 0.5;
  if (didOperationSucceed) {
    console.log(temp)
  } else {
    console.log(error);
  }
}

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
setTimeout(() => sendMarsTemperature(temperatureInFahrenheit(getMarsTemperature()), handleError('Robot is busy')), messageDelay());

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
setTimeout(() => sendMarsTemperature(greet(getMarsTemperature()), handleError('Robot is busy')), messageDelay());