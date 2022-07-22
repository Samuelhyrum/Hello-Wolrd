import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      numeroCliques: 0,
      numero: 0,
      num: 0
    };

    this.handleClick = this.handleClick.bind(this)
    this.Click = this.Click.bind(this)
    this.handle = this.handle.bind(this)
  }

  handleClick() {
    this.setState(({ numero }) => ({
      numero: numero + 1
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(this.state.numero)}`);
    });
  }

  Click() {
    this.setState(({ num }) => ({
      num: num + 1
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(this.state.num)}`);
    });
  }

  handle() {
    this.setState(({ numeroCliques }) => ({
      numeroCliques: numeroCliques + 1
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(this.state.numeroCliques)}`);
    });
  }

  getButtonColor(num) {
    // Essa função contém um ternário que realiza a lógica para mudarmos
    // a cor do botão para verde quando for um número par
    return num % 2 === 0 ? 'green' : 'white';
  }


  render() {
    const { numero, num, numeroCliques } = this.state;

    return (
      <div>
        <button onClick={this.handleClick}
          style={{ backgroundColor: this.getButtonColor(numero) }}> Botão 1| Count = {numero}</button>

        <button onClick={this.Click}
          style={{ backgroundColor: this.getButtonColor(num) }}> Botão 2 | Count = {num}</button>

        <button onClick={this.handle} style={{ backgroundColor: this.getButtonColor(numeroCliques) }}>Botão 3 | Count = {numeroCliques}</button>

      </div>
    )
  }
}

export default App;