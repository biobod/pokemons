import React, { Component } from 'react';
import PokemonCard from './pokemonCard'

const pokeURL = 'https://pokeapi.co/api/v1/pokemon/3';
const pokeURL2 = 'https://pokeapi.co/api/v2/pokemon/3/';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pokemon: null,
    }
  }
  // componentDidMount = () => {
  //   fetch('https://pokeapi.co/api/v2/pokedex/1/')
  //     .then(res => res.json())
  //     .then(data => this.setState({ pokemons: data }))
  // }
  componentDidMount = () => {
    fetch(pokeURL2)
      .then(res => res.json())
      .then(data => this.setState({ pokemon: data }))
  }
  
  render() {
    const { pokemon } = this.state
    console.log(pokemon)
    return pokemon
      ? <PokemonCard
        name={pokemon.name}
        image={pokemon.sprites.front_default}
      />
      : <span>loading</span>
  }
}

export default Dashboard;
