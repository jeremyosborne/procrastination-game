import classNames from 'classnames/bind'
import React from 'react'

import styles from './Drawer.css'

const cx = classNames.bind(styles)

type Props = {
  /** Customized content of the drawer. */
  children: any,
  /** open (true) or closed (false) */
  initialState?: boolean,
}

export const Drawer = ({
  children,
  initialState = false,
}: Props = {}) => {
  const [open, setOpen] = React.useState(initialState)

  return (
    <div className={cx('container', {open})}>
      <div className={cx('content', {open})}>
        {children}
      </div>
      <div
        aria-pressed='false'
        className={cx('button', {open})}
        onClick={() => setOpen(!open)}
        role='button'
        tabIndex='0'
      >
        <span>+</span>
      </div>
    </div>
  )
}

export default Drawer
