import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import PokemonCard from './pokemonCard'
import { fetchPokemon } from './../redux/actions'
import ButtonsSection from './buttonsSection'

class Dashboard extends Component {
  componentWillMount = () => {
    const { id, getPokemon } = this.props
    getPokemon(id)
  }
  
  showNextPokemon = () => {
    const { id, getPokemon } = this.props
    getPokemon(+id + 1)
  }
  showPreviousPokemon = () => {
    const { id, getPokemon } = this.props
    getPokemon(id - 1)
  }
  
  render() {
    console.log('render')
    const {
      showPreviousPokemon, showNextPokemon,
      props: { pokemon, isError }
    } = this
    if (isError) {
      return <div>Sorry, something go wrong</div>
    }
    return (
      <div>
        <ButtonsSection
          showNextPokemon={showNextPokemon}
          showPreviousPokemon={showPreviousPokemon}
        >
          {pokemon
            ? <PokemonCard
              name={pokemon.name}
              image={pokemon.sprites.front_default}
            />
            : <span>loading</span>
      }
        </ButtonsSection>
      </div>
    )
  }
}

Dashboard.propTypes = {
  pokemon: PropTypes.shape(),
  isError: PropTypes.bool,
  getPokemon: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default connect(state => ({
  id: state.currentPokemonId,
  pokemon: state.pokemon,
  isError: state.error,
}), { getPokemon: fetchPokemon })(Dashboard);
