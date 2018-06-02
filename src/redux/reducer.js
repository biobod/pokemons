import { combineReducers } from 'redux'

export default (state, action) => {
  switch (action.type) {
    case 'GET_POKEMON_SUCCESS':
      return {
        ...state,
        pokemons: action.alreadyPresent ? [...state.pokemons] : [...state.pokemons, action.data],
        pokemon: action.data,
        currentPokemonId: action.id,
        error: false,
      }
    case 'GET_POKEMON_ERROR': return {
      ...state,
      pokemon: null,
      error: true
    }
    default: return state
  }
}
