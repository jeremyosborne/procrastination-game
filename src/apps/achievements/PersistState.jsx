// @flow
import {useAppState} from 'achievements/state'
import * as events from 'achievements/state/events'
import React from 'react'

type Props = {
  // Save will be made every N ticks.
  interval?: number,
}

//
// Non-visual component that will write the state to disk periodically.
//
// No one wants to lose their achievement progress ;)
//
export const PersistState = ({
  interval = 3,
}: Props) => {
  const {state} = useAppState()
  const ticks = events.ticks(state)

  React.useEffect(() => {
    if (ticks && (ticks % interval === 0)) {
      window.localStorage['jwo-achievements'] = JSON.stringify(state)
    }
  }, [state, ticks, interval])

  return (
    <div />
  )
}

export default PersistState
