import classNames from 'classnames/bind'
import {useAppState} from 'achievements/state'
import {DeveloperModeOnly, JSONView} from 'common/developer'
import React from 'react'

import styles from './AppStateView.css'

const cx = classNames.bind(styles)

// Debug view. Hidden from production builds.
export const AppStateView = () => {
  const {state} = useAppState()
  const [open, setOpen] = React.useState(false)
  const dynamicClasses = {open}

  return (
    <DeveloperModeOnly>
      <div className={cx('container', dynamicClasses)}>
        {
          open ?
            <JSONView data={state} />
            :
            <button type='button' onClick={() => setOpen(!open)}>show state</button>
        }
      </div>
    </DeveloperModeOnly>
  )
}

export default AppStateView
