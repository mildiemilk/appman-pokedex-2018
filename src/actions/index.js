import {
  getPokemon as getPokemonAPI,
  searchPokemon as searchPokemonApi,
  getMorePokemon as getMorePokemonApi,
} from '../service'

import asyncAction from './asyncation'

export const GET_POKEMON = asyncAction('GET_POKEMON')
export const SEARCH_POKEMON = asyncAction('SEARCH_POKEMON')
export const GET_MORE_POKEMON = asyncAction('GET_MORE_POKEMON')

export const getPokemon = () => dispatch => {
  dispatch({ type: GET_POKEMON.PENDING })
  return getPokemonAPI()
    .then(result => {
      console.log('result:', result)
      dispatch({
        type: GET_POKEMON.SUCCESS,
        payload: result.data
      })
    })
    .catch(error =>
      dispatch({
        type: GET_POKEMON.FAILURE,
        error
      })
    )
}

export const searchPokemon = ({ filterName, value }) => dispatch => {
  dispatch({ type: SEARCH_POKEMON.PENDING })
  return searchPokemonApi({ filterName, value })
    .then(result => {
      dispatch({
        type: SEARCH_POKEMON.SUCCESS,
        payload: result.data
      })
    })
    .catch(error =>
      dispatch({
        type: SEARCH_POKEMON.FAILURE,
        error
      })
    )
}

export const getMorePokemon = () => dispatch => {
  return getMorePokemonApi()
    .then(result => {
      dispatch({
        type: GET_MORE_POKEMON.SUCCESS,
        payload: result.data
      })
    })
    .catch(error =>
      dispatch({
        type: GET_MORE_POKEMON.FAILURE,
        error
      })
    )
}