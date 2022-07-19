import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value.map((comp) => <li>{comp}</li> )}</li>
  );
}
class App extends React.Component {
  render() {
    const compromissos = Task(['Samuel Hyrum','Estudar', 'Comer', 'Dormir', 'Jogar', 'Procurar namorada', 'Trabalhar']);
    return (
      compromissos
    );
  }
}

export default App;
