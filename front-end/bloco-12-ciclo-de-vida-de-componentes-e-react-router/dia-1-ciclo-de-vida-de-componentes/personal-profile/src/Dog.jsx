import React, { Component } from 'react';
import Loading from './Loading';

class Dog extends Component {
  constructor() {
    super();

    this.state = {
      dogObj: '',

    };
    this.randomDog = this.randomDog.bind(this);
  }

  componentDidMount() {
    this.randomDog();
  }
  shouldComponentUpdate(nextProps, nextState){
    // Não atualize o componente se o doguinho for terrier
    if(nextState.dogObj.message.includes('terrier')){
        return false;
    }
    return true;
}

componentDidUpdate() {
    const { dogObj } = this.state;
        // Guardando a URL do último doguinho no `localStorage`...
        localStorage.setItem('dogURL', dogObj.message);
        const dogBreed = dogObj.message.split('/')[4];
            // ... e mostrando a raça dele usando um `alert`
alert(dogBreed);

}

  async randomDog() {
    const request = await fetch('https://dog.ceo/api/breeds/image/random');
    const requestObj = await request.json();
    this.setState({
      dogObj: requestObj,
    });
  }

  render() {
    const { dogObj } = this.state;

    if (dogObj === '') return <Loading />;

    return (
      <div>
        <p>Doguinhos</p>
        <button type="button" onClick={ this.randomDog }>Novo Doguinho!</button>
        <div>
          <img src={ dogObj.message } alt="Random dog" />
        </div>
      </div>
    );
  }
}

export default Dog;