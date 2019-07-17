import { combineReducers } from 'redux'
import pokemon from './pokemon'
import dataSearch from './dataSearch'
import morePokemon from './morePokeMon'

const rootReducer = combineReducers({
  pokemon,
  dataSearch,
  morePokemon,
})

export default rootReducer