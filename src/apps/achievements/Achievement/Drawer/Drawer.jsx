import classNames from 'classnames/bind'
import React from 'react'
import {childrenType, classNamesType, styleType} from 'common/types'

import styles from './Drawer.css'

const cx = classNames.bind(styles)

type Props = {
  /** Styling via className */
  className: classNamesType,
  /** Customized content of the drawer. */
  children?: childrenType,
  /** open (true) or closed (false) */
  initialState?: boolean,
  /** CSS style override. */
  style?: styleType,
}

export const Drawer = ({
  children,
  className = '',
  initialState = false,
  style = {},
}: Props = {}) => {
  const [open, setOpen] = React.useState(initialState)

  return (
    <div className={cx('container', {open}, className)} style={style}>
      <div className={cx('content', {open})}>
        {children}
      </div>
      <div
        aria-pressed='false'
        className={cx('button', {open})}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => (e.which === 32 || e.which === 13) && setOpen(!open)}
        role='button'
        tabIndex='0'
      >
        {open ? <span>-</span> : <span>+</span>}
      </div>
    </div>
  )
}

export default Drawer
