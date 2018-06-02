import fetch from 'cross-fetch'
import { POKEMON_PATH } from '../utils'

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
