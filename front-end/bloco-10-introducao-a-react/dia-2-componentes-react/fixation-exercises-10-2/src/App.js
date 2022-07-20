import './App.css';
// import Image from './image';
  // src/App.js
  // import React from 'react';
  // import Album from './components/Album'

  // arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    return (
      <div className="App">
        <h1> Orders recently created </h1>
         <Order order={headphone}/>
         <Order order={energyDrink}/>
      </div>
    );
  }
}

export default App;

  // class App extends React.Component {
  //   render() {
  //     const album01 = {
  //       image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Coldplay_-_Mylo_Xyloto_%28Official_Album_Cover%29.png/220px-Coldplay_-_Mylo_Xyloto_%28Official_Album_Cover%29.png',
  //       title: 'Mylo Xyloto',
  //       releaseDate: {
  //         year: '2011',
  //         month: '10',
  //         day: '24',
  //       },
  //       others: {
  //         recordCompany: 'Capitol, Parlophone',
  //         formats: 'CD, digital'
  //       }
  //     };
  
  //     const album02 = {
  //       image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
  //       title: 'Ghost Stories',
  //       releaseDate: {
  //         year: '2014',
  //         month: '05',
  //         day: '16',
  //       },
  //       others: {
  //         recordCompany: 'Parlophone',
  //         formats: 'CD, digital'
  //       }
  //     };
  
  //     return (
  //       <div>
  //         <Album album={ album01 } />
  //         <Album album={ album02 } />
  //       </div>
  //     );
  //   }
  // }

// function App() {
//   return (
//       <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText= "Cute cat staring,"
//       />
//   );
// }

// export default App;
