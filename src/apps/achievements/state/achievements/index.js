export const REDUCER_KEY = 'achievements'

export const ACHIEVEMENTS_ACHIEVED = 'jo/achievements/achieved'

export const achieved = (id) => {
  return {
    type: ACHIEVEMENTS_ACHIEVED,
    payload: {
      id,
    },
  }
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ACHIEVEMENTS_ACHIEVED:
      return {
        ...state,
        [action.payload.id]: {
          when: Date.now(),
        }
      }
    default:
      return state
  }
}

export default reducer
