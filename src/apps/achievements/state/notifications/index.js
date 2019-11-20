export const REDUCER_KEY = 'notifications'

/**
 * Add a new notification to the end of the notification queue.
 * See: notify
 */
export const ENQUEUE = `jo/${REDUCER_KEY}/enqueue`
export function enqueue (payload) {
  if (payload instanceof Error) {
    // Basic JavaScript errors roughly conform to our needs.
    payload = {
      message: payload.message,
      // explicit typing in our notifications, because someday we might have
      // error subtleties / error codes so don't assume that an error object
      // always means just isError.
      type: 'error',
    }
  } else if (typeof payload === 'string') {
    // Assume it is a string or UI-ish component meant to be displayed as is.
    payload = {
      message: payload,
      // other fields on the notification object are extensible and dependent
      // on the UI handling the notification object.
    }
  }
  return {
    type: ENQUEUE,
    payload,
  }
}

/**
 * Add a notification to the end of the queue of notifications.
 *
 * The payload is assumed to be:
 *
 * {
 *    message: {String} passed through to the UI.,
 *    type: {['info'|'error']='info'} type of notification, assumed to affect styling of UI.
 * }
 *
 * @param {Object|String|Error} payload
 * @return {Object} Flux Standard Action
 */
export const notify = enqueue

/**
 * Remove a specific item, and all references to it, from the queue.
 *
 * @return {Object} Flux Standard Action
 */
export const REMOVE = `jo/${REDUCER_KEY}/remove`
export function remove (payload) {
  return {type: REMOVE, payload}
}

/**
 * Remove one item from the head of the queue.
 *
 * @return Flux standard Action
 */
export const DEQUEUE = `jo/${REDUCER_KEY}/dequeue`
export function dequeue (payload) {
  return {type: DEQUEUE}
}

/**
 * Return the queue to the default state.
 *
 * @return Flux Standard Action
 */
export const RESET = `jo/${REDUCER_KEY}/reset`
export function reset (payload) {
  return {type: RESET}
}

const DEFAULT_STATE = []

export function reducer (state = DEFAULT_STATE, action = {}) {
  console.log('notification reducer state:', state)
  switch (action.type) {
    case DEQUEUE:
      return state.slice(1)
    case ENQUEUE:
      return state.concat(action.payload)
    case REMOVE:
      return state.filter((notification) => notification !== action.payload)
    case RESET:
      return DEFAULT_STATE
    default:
      return state
  }
}
export default reducer
