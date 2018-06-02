
export default (state, action) => {
  switch (action.type) {
    case 'GET_POKEMON':
      return {
        ...state,
        isLoading: true,
      }
    case 'GET_POKEMON_SUCCESS':
      return {
        ...state,
        pokemons: action.alreadyPresent ? [...state.pokemons] : [...state.pokemons, action.data],
        pokemon: action.data,
        currentPokemonId: action.id,
        error: false,
        isLoading: false,
      }
    case 'GET_POKEMON_ERROR':
      return {
        ...state,
        pokemon: null,
        error: true,
        isLoading: false,
      }
    case 'GET_POKEMONS_COUNT_SUCCESS':
      return {
        ...state,
        pokemonsCount: action.data
      }
    default: return state
  }
}
