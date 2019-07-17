import {
  SEARCH_POKEMON
} from '../actions'

export default (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case SEARCH_POKEMON.SUCCESS:
      return {
        ...state,
        data: payload,
        pending: false,
      }
    case SEARCH_POKEMON.PENDING:
      return {
        ...state,
        pending: true,
      }
    case SEARCH_POKEMON.FAILURE:
      return {
        ...state,
        data: {},
        pending: false
      }
    default:
      return state
  }
}