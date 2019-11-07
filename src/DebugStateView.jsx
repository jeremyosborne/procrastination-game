import React from 'react'
import {useAppState} from './AppState'

export const DummyContent = () => {
  const {state} = useAppState()

  return (
    <pre>
      {JSON.stringify(state, null, 4)}
    </pre>
  )
}

export default DummyContent
