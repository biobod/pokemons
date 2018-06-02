import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom';

import { connect } from 'react-redux'
import PokemonCard from './pokemonCard'
import { fetchPokemon } from './../redux/actions'
import ButtonsSection from './buttonsSection'

class Dashboard extends Component {
  componentWillMount = () => {
    const { id, getPokemon } = this.props
    getPokemon(id)
  }
  componentDidMount() {
    window.addEventListener('wheel', this.listenScrollEvent)
  }
  componentWillUnmount() {
    window.removeEventListener('wheel', this.listenScrollEvent);
  }
  
  showNextPokemon = () => {
    const { id, getPokemon } = this.props
    getPokemon(+id + 1)
  }
  showPreviousPokemon = () => {
    const { id, getPokemon } = this.props
    getPokemon(id - 1)
  }
 
  listenScrollEvent = (e) => {
    const { isLoading } = this.props
    if(e.deltaY > 0 && !isLoading) {
      this.showPreviousPokemon()
    } else if (e.deltaY < 0 && !isLoading) {
      this.showNextPokemon()
    }
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
            ? <PokemonCard pokemon={pokemon} />
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
  isLoading: state.isLoading,
}), { getPokemon: fetchPokemon })(Dashboard);
