function testingScope(escopo) {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
        console.log(ifScope);
    } else {
        let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

const testingScope = (escopo) => {
    if (escopo === true) {
        const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        console.log(`${ifScope}, ótimo, fui utilizada no escopo !`);
    } else {
        const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
}

testingScope(false);




const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a,b) => a - b );

console.log(oddsAndEvens); 