import fetch from 'cross-fetch'
import { POKEMON_PATH, POKEMONS_COUNT_PATH } from '../utils'

export const GET_POKEMON = 'GET_POKEMON'
export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS'
export const GET_POKEMON_ERROR = 'GET_POKEMON_ERROR'

export const getPokemon = id => ({
  type: GET_POKEMON,
  id
})
export const getPokemonSuccess = (id, data, alreadyPresent) => ({
  type: GET_POKEMON_SUCCESS,
  id,
  data,
  alreadyPresent
})
export const getPokemonError = () => ({
  type: GET_POKEMON_ERROR,
})

export const fetchPokemon = id => (dispatch, getState) => {
  dispatch(getPokemon(id))
  const { pokemons } = getState()
  const presentPokemon = pokemons.find(pokemon => pokemon.id === id)
  if (presentPokemon) {
    return dispatch(getPokemonSuccess(id, presentPokemon, true))
  }
  return fetch(`${POKEMON_PATH}/${id}/`)
    .then(res => res.json())
    .then(json => {
      if (json.id) {
        dispatch(getPokemonSuccess(id, json))
      } else {
        dispatch(getPokemonError())
      }
    })
}

export const GET_POKEMONS_COUNT = 'GET_POKEMONS_COUNT'
export const GET_POKEMONS_COUNT_SUCCESS = 'GET_POKEMONS_COUNT_SUCCESS'
export const GET_POKEMONS_COUNT_ERROR = 'GET_POKEMONS_COUNT_ERROR'

export const getPokemonsCount = () => ({ type: GET_POKEMONS_COUNT })
export const getPokemonCountSuccess = data => ({
  type: GET_POKEMONS_COUNT_SUCCESS,
  data
})
export const getPokemonCountError = () => ({
  type: GET_POKEMONS_COUNT_ERROR
})

export const fetchPokemonsCount = () => dispatch => {
  dispatch(getPokemonsCount())
  return fetch(POKEMONS_COUNT_PATH)
    .then(res => res.json())
    .then(json => {
      if (json.id) {
        dispatch(getPokemonCountSuccess(json.pokemon_entries.length))
      } else {
        dispatch(getPokemonCountError())
      }
    })
}
