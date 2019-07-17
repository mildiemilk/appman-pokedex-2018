import axios from 'axios'
// import store from '../store'
// import { loginUserSuccess, loginUserPending, loginUserFailure } from '../actions/profile'
// import { LOGIN_USER } from '../actions/profile'

const BASE_URL = 'http://localhost:3030'

export const getPokemon = () => {
  return axios.get(BASE_URL + '/api/cards')
    .catch(err => { throw err })
}

export const getMorePokemon = () => {
  return axios.get(BASE_URL + '/api/cards?limit=30')
    .catch(err => { throw err })
}

export const searchPokemon = ({ value }) => {
  return axios.get(BASE_URL + '/api/cards?name=' + value)
    .catch(err => { throw err })
} 