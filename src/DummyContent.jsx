import React from 'react'
import {useAppState} from './AppState'

export const DummyContent = () => {
  const {state} = useAppState()

  return (
    <div>
      {JSON.stringify(state)}
    </div>
  )
}

export default DummyContent
