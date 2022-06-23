const wakeUp = () => {
    return 'Acordando!!';
}
const drinks = () => {
    return 'Bora tomar café!!';
}
const sleeping = () => {
    return 'Partiu dormir!!';
}

const doingThings = (Thing) => Thing();

console.log(doingThings(sleeping));
// console.log(wakeUp());
// console.log(drinks());

const cadastro = (nome, mail) => ({
    name: nome,
    mail: `${nome}@trybe.com`
});
//console.log(cadastro("samuel", "samuelhymp"));

const newEmployees = () => {
    const employees = {
        id1: cadastro("pedro_guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: cadastro("luiza_drummond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: cadastro("carla_paiva") // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    };
    return employees;
};

console.log(newEmployees());