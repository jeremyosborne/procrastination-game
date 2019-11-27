import _ from 'lodash'

export const REDUCER_KEY = 'events'

export const IDS = {
  UNLOCK_ACHIEVEMENTS: 'unlock-achievements',
  STAYIN_ALIVE: 'stayin-alive'
}

export const CLICK = 'jo/events/click'
export const click = (e) => ({
  type: CLICK,
  payload: e || {}
})

export const KEY_DOWN = 'jo/events/key-down'
export const keyDown = (e) => ({
  type: KEY_DOWN,
  payload: {
    code: e.which,
    char: String.fromCharCode(e.which)
  }
})

export const RESET = 'jo/events/reset'
export const reset = () => ({
  type: RESET
})

export const TICK = 'jo/events/tick'
export const tick = () => ({
  type: TICK
})

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case CLICK:
      return {
        ...state,
        clicks: (state.clicks || 0) + 1
      }
    case KEY_DOWN:
      return {
        ...state,
        keydowns: _.takeRight([...(state.keydowns || []), action.payload.char], 15),
      }
    case RESET:
      return {}
    case TICK:
      return {
        ...state,
        ticks: (state.ticks || 0) + 1
      }
    default:
      return state
  }
}

//
// Selectors
//
// Ticks are used throughout, allow access as a number at all times.
export const ticks = (state: any): number => _.get(state, 'events.ticks', 0)
