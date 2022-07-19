import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const task = Task("Samuel Hyrum")
class App extends React.Component {
  render() {
    const compromissos = ['Estudar','Comer', 'Dormir', 'Jogar', 'Procurar namorada', 'Trabalhar'];
    return (
      <div>
        <ul>
          {compromissos.map((compromissos) => <li>{compromissos}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
