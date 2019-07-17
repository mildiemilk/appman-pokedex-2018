import {
  GET_POKEMON
} from '../actions'

export default (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_POKEMON.SUCCESS:
      return {
        ...state,
        data: payload,
        pending: false,
      }
    case GET_POKEMON.PENDING:
      return {
        ...state,
        pending: true,
      }
    case GET_POKEMON.FAILURE:
      return {
        ...state,
        data: {},
        pending: false
      }
    default:
      return state
  }
}