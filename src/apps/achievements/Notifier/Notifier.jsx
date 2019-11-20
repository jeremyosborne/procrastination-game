import {useAppState} from 'achievements/state'
import {remove} from 'achievements/state/notifications'
import _ from 'lodash'
import Notification from './Notification.jsx'
import React from 'react'

export const Notifier = () => {
  const {state, dispatch} = useAppState()

  const notification = _.get(state, 'notifications[0]')

  return (
    notification
      ? <Notification notification={notification} onClose={(...args) => dispatch(remove(...args))} />
      : null
  )
}

export default Notifier
