# NotRedux - Making hooks act like redux for app state

Experimental. My first attempt at making [React Hooks](https://reactjs.org/docs/hooks-overview.html) provide a redux like experience when shared application state is useful.

In real apps, [react-redux bindings offer hooks](https://react-redux.js.org/next/api/hooks) for functional components.

## Usage

The following is convention of concrete requirement.

Create your application state singleton, since that is the redux paradigm (one state to rule them all). In this example, we assume the file where this lives is `AppState.js`.

```js
import React from 'react'
// Your application context is built off the NotRedux context.
import NotRedux from './NotRedux'

// Your reducer could be a combination of reducers.
export const reducer = (state, action) => {
  switch (action.type) {
    case 'something':
        // Do stuff....
    default:
      return state
  }
}

// Rename to something for your application.
export const AppState = NotRedux

// Build a hook for components that need this.
export const useAppState = () => React.useContext(AppState)

export default AppState
```

At a high level in your application, probably at or near the application root, set up the context:

```js
import React from 'react'
import {AppState, reducer} from './AppState'

export const App = () => {
  const initialState = {}
  // You must pass in your reducer and your initial state.
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    // By convention, pass down your state and dispatch to make it available
    // to child components via `useAppState` hook.
    <AppState.Provider value={{state, dispatch}}>
        {/* insert other root components that will receive the context. */}
    </AppState.Provider>
  )
}

export default App
```

In the child components that need to access the application state:

```js
import React from 'react'
import {useAppState} from './AppState'

export const DummyContent = () => {
  const {dispatch, state} = useAppState()

  React.useEffect(() => {
      // Doesn't require a flux standard action, but probably a fine idea.
      dispatch({type: 'some-thing', payload: 'happened'})
  }, [dispatch])

  return (
    <div>
      {/* Do something with state... */}
    </div>
  )
}

export default DummyContent
```
