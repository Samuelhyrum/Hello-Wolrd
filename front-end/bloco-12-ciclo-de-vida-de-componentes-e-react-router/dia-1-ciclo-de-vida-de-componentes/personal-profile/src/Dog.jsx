// import React, { Component } from 'react';
// import Loading from './Loading';

// class Dog extends Component {
//   constructor() {
//     super();

//     this.state = {
//       dogObj: '',
//       name: '',

//     };
//     this.randomDog = this.randomDog.bind(this);
//   }

//   componentDidMount() {
//     this.randomDog();
//   }
//   shouldComponentUpdate(nextProps, nextState){
//     // Não atualize o componente se o doguinho for terrier
//     if(nextState.dogObj.message.includes('terrier')){
//         return false;
//     }
//     return true;
// }

// componentDidUpdate() {
//     const { dogObj } = this.state;
//         // Guardando a URL do último doguinho no `localStorage`...
//         localStorage.setItem('dogURL', dogObj.message);
//         const dogBreed = dogObj.message.split('/')[4];
//             // ... e mostrando a raça dele usando um `alert`
// alert(dogBreed);

// }

//   async randomDog() {
//     const request = await fetch('https://dog.ceo/api/breeds/image/random');
//     const requestObj = await request.json();
//     this.setState({
//       dogObj: requestObj,
//     });
//   }

//   render() {
//     const { dogObj, name } = this.state;

//     if (dogObj === '') return <Loading />;

//     return (
//       <div>
//         <p>Doguinhos</p>
//         <button type="button" onClick={ this.randomDog }>Novo Doguinho!</button>
//         <div>
//           <input
//             type="text"
//             value={ name }
//             onChange={ (e) => this.setState({ name: e.target.value }) }
//             placeholder="digite o nome do doguinho"
//           />
//           <button type="button" onClick={ this.saveData }>Salvar doguinho!</button>
//         </div>
//         <div>
//           <img src={ dogObj.message } alt="Random dog" />
//         </div>
//       </div>
//     );
//   }
// }

// export default Dog;
import React from 'react';
import Loading from './Loading';
class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      name: '',
      array: [],
    };
    this.fetchDog = this.fetchDog.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  componentDidMount() {
    // Se já temos uma imagem guardada, vamos mostrá-la em vez de pedir uma nova
    if (localStorage.namedDogURL) {
      const parseStorage = JSON.parse(localStorage.namedDogURL);
      const lastDog = parseStorage[parseStorage.length-1].message;
      this.setState({
        array: parseStorage,
        data: { message: lastDog },
      });
    } else {
      this.fetchDog();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.data.message.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    const { data: actualData } = this.state;
    if (prevState.data !== actualData) {
      const dogBreed = actualData.message.split('/')[4];
      alert(dogBreed);
    }
  }

  fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .then((result) => this.setState({ data: result }));
  }

  saveData() {
    const {
      data: { message },
      name,
      array,
    } = this.state;
    // atualizando e guardando a lista inteira de imagens no `localStorage`
    const dogData = { message, name };
    const newArray = [...array, dogData];
    this.setState({ array: newArray });
    this.setState({ name: '' });
    localStorage.setItem('namedDogURL', JSON.stringify(newArray));
  }

  render() {
    const { data, name } = this.state;

    if (data === '') return <Loading/>;
    return (
      <div>
        <p>Doguinhos</p>
        <button type="button" onClick={ this.fetchDog }>Novo doguinho!</button>
        <div>
          <input
            type="text"
            value={ name }
            onChange={ (e) => this.setState({ name: e.target.value }) }
            placeholder="digite o nome do doguinho"
          />
          <button type="button" onClick={ this.saveData }>Salvar doguinho!</button>
        </div>
        <div>
          <img src={ data.message } alt={ data.message } />
        </div>
      </div>
    );
  }
}

export default Dog;