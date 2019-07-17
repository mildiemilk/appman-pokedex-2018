import {
  GET_MORE_POKEMON
} from '../actions'

export default (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_MORE_POKEMON.SUCCESS:
      return {
        ...state,
        data: payload,
        pending: false,
      }
    case GET_MORE_POKEMON.PENDING:
      return {
        ...state,
        pending: true,
      }
    case GET_MORE_POKEMON.FAILURE:
      return {
        ...state,
        data: {},
        pending: false
      }
    default:
      return state
  }
}