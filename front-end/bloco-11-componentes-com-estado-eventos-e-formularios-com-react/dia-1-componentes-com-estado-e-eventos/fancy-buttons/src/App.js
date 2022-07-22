import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
    this.Click = this.Click.bind(this)
    this.handle = this.handle.bind(this)

    this.state = {
      numeroCliques: 0,
      numero: 0,
      num : 0
    }

  }

  // par () {
  //   this.setState((antigo, _props) => {if (antigo %2 ===0){
  //    num : antigo.num +green
  //   }
  // })
  // }
  handleClick() {
    this.setState((antigo, _props) => ({
      numero: antigo.numero + 1
    }))
  }
  Click() {
    this.setState((antigo, _props) => ({
      num: antigo.num + 1
    }))
  }
  handle() {
    this.setState((antigo, _props) => ({
      numeroCliques: antigo.numeroCliques + 1
    }))
  }


  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.numero}</button>
        <button onClick={this.Click}>{this.state.num}</button>
        <button onClick={this.handle}>{this.state.numeroCliques}</button>

      </div>
    )
  }
}

export default App;