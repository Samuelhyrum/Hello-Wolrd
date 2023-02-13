import React from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';

function App() {
  return <main className='Header'>
    <Header />
    <Content />
    <footer className='Footer'>
      <Footer />
    </footer>
    </main>

}

// const Task = (value) => {
//   return (
//     <ul>{value.map((comp) => <li>{comp}</li> )}</ul>
//   );
// }
// class App extends React.Component {
//   render() {
//     const compromissos = Task(['Samuel Hyrum','Estudar', 'Comer', 'Dormir', 'Jogar', 'Procurar namorada', 'Trabalhar']);
//     return (
//       compromissos
//     );
//   }
// }

export default App;
