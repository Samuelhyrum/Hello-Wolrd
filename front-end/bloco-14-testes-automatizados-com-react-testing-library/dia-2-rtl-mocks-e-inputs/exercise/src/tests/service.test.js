const service = require('../service')
const { test } = require('@jest/globals')

test('testando se a função foi chamada, qual o seu retorno e quantas vezes foi chamada', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);

    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
})

test('testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros"', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(service.randomNumber(10, 2)).toBe(5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(10,2);
})

describe('testando implantações', () => {
    test('mockando função para receber 3 parametros e retornar sua multiplicação', () => {
        service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

        expect(service.randomNumber(2, 3, 4)).toBe(24);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
        expect(service.randomNumber).toHaveBeenCalledWith(2, 3, 4);
    })

    test('mockando função que recebe um parametro e retorna seu dobro', () => {
        service.randomNumber.mockReset();
        expect(service.randomNumber).toHaveBeenCalledTimes(0);

        service.randomNumber.mockImplementation(a => a * 2);

        expect(service.randomNumber(5)).toBe(10);
        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
        expect(service.randomNumber).toHaveBeenCalledWith(5);
    })
})

describe('Testando o exercicio 4', () => {
    test('mockando função para receber um parâmetro e retornar em caixa alta', () => {
        const mockFirstFunction = jest.spyOn(service, "firstFunction").mockImplementation(a => a.toUpperCase());

        expect(mockFirstFunction("uppercase")).toBe('UPPERCASE');
        expect(service.firstFunction).toHaveBeenCalledTimes(1);expect(service.firstFunction).toHaveBeenCalledWith("uppercase");
    })

    test('mockando função que recebe um parâmetro e retorna a primeira letra', () => {
        const mockSecondFunction = jest.spyOn(service, 'secondFunction').mockImplementation(a => a.charAt(0));

        expect(mockSecondFunction('letter')).toBe('l');
        expect(service.secondFunction).toHaveBeenCalledTimes(1);
        expect(service.secondFunction).toBeCalledWith('letter');
    })

    test('mockando função que recebe 3 parâmetros e os concatena', () => {
        const mockThirdFunction = jest.spyOn(service, 'thirdFunction').mockImplementation((a, b, c) => a.concat(b, c));

        expect(mockThirdFunction('tr', 'y', 'be')).toBe("trybe");
        expect(service.thirdFunction).toHaveBeenCalledTimes(1);
        expect(service.thirdFunction).toHaveBeenCalledWith('tr', 'y', 'be');
    })
    test("restaurando a primeira função e verifica se ela retorna em caixa alta", () => {
        service.firstFunction.mockRestore();
    
        expect(service.firstFunction("lowercase")).toBe("LOWERCASE");
      })
})