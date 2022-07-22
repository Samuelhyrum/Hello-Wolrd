import React, { Component } from "react";
import pokemons from '../data'
import Pokemon from "./Pokemon";

class Pokedex extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.nextPoke = this.nextPoke.bind(this);
  }

  nextPoke() {
    const { count } = this.state;

    if (count === pokemons.length - 1) {
      this.setState(() => ({
        count: 0,
      }));
    } else {
      this.setState((antigo) => ({
        count: antigo.count + 1,
      }));
    }
  }

  render() {
    const { count } = this.state;
    return (

      <div>
        <h1>Pokedex</h1>
          <button onClick={this.nextPoke}>Proximo Pokemon</button>
        <div className="pokedex">
        </div>
        <Pokemon key={pokemons[count].id} pokemon={pokemons[count]} />
      </div>
    );
  };
}

export default Pokedex