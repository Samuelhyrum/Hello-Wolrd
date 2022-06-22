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
