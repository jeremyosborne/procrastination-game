import classNames from 'classnames/bind'
import {useAppState} from 'achievements/state'
import {JSONView} from 'common/developer'
import React from 'react'

import styles from './AppStateView.css'

const cx = classNames.bind(styles)

// Debug view. Allows to be visible any time, please include / exclude where
// component is instantiated.
export const AppStateView = () => {
  const {state} = useAppState()
  const [open, setOpen] = React.useState(false)
  const dynamicClasses = {open}

  return (
    <div className={cx('container', dynamicClasses)}>
      {
        open ?
          <JSONView data={state} />
          :
          <button type='button' onClick={() => setOpen(!open)}>show state</button>
      }
    </div>
  )
}

export default AppStateView
