import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PokemonCard from './pokemonCard'
import { fetchPokemon, fetchPokemonsCount } from './../redux/actions'
import ButtonsSection from './buttonsSection'

class Dashboard extends Component {
  componentWillMount() {
    const { id, getPokemon, getPokemonsCount } = this.props
    getPokemonsCount()
    getPokemon(id)
  }
  componentDidMount() {
    window.addEventListener('wheel', this.listenScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('wheel', this.listenScroll);
  }
  
  showNextPokemon = () => {
    const { id, getPokemon, pokemonsCount } = this.props
    let nextId = +id + 1
    if (nextId > pokemonsCount) {
      nextId = 1
    }
    getPokemon(nextId)
  }
  showPreviousPokemon = () => {
    const { id, getPokemon, pokemonsCount } = this.props
    let previousId = id - 1
    if (previousId <= 0) {
      previousId = pokemonsCount
    }
    getPokemon(previousId)
  }
  listenScroll = (e) => {
    const { isLoading } = this.props
    if (isLoading) {
      return
    }
    if (e.deltaY > 0) {
      this.showPreviousPokemon()
    } else {
      this.showNextPokemon()
    }
  }
  
  render() {
    const {
      showPreviousPokemon, showNextPokemon,
      props: { pokemon, isError, isLoading }
    } = this
    if (isError) {
      return <div>Sorry, something go wrong</div>
    }
    return (
      <div>
        <ButtonsSection
          showNextPokemon={showNextPokemon}
          showPreviousPokemon={showPreviousPokemon}
          isLoading={isLoading}
        >
          {pokemon && <PokemonCard pokemon={pokemon} isLoading={isLoading} />}
        </ButtonsSection>
      </div>
    )
  }
}

Dashboard.propTypes = {
  pokemon: PropTypes.shape(),
  isError: PropTypes.bool,
  getPokemon: PropTypes.func.isRequired,
  getPokemonsCount: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  pokemonsCount: PropTypes.number.isRequired
};

export default connect(state => ({
  id: state.currentPokemonId,
  pokemon: state.pokemon,
  isError: state.error,
  isLoading: state.isLoading,
  pokemonsCount: state.pokemonsCount,
}), { getPokemon: fetchPokemon, getPokemonsCount: fetchPokemonsCount })(Dashboard);
