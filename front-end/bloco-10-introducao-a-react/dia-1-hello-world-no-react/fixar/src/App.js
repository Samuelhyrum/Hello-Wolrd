import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <ul>{value.map((comp) => <li>{comp}</li> )}</ul>
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
