import classNamesBinder from 'classnames/bind'
import {classNamesType, notificationType, styleType} from 'common/types'
import _ from 'lodash'
import React from 'react'

import styles from './Notification.css'

const cx = classNamesBinder.bind(styles)

type Props = {
  /** Additional styling. */
  className?: classNamesType,
  /** message to display */
  notification: notificationType,
  onClose: (n: notificationType) => void,
  /** CSS style override. */
  style?: styleType,
}

// Always visible. Control whether this should be shown or not in containing elements.
export const Notification = ({
  className = '',
  notification,
  onClose,
  style = {},
}: Props = {}) => {
  return (
    <div className={cx('notification', _.get(notification, 'type', 'info'), className)} style={style}>
      <div className={cx('message')}>{_.get(notification, 'message')}</div>
      <button className={cx('close')} onClick={() => onClose(notification)}>Close</button>
    </div>
  )
}

export default Notification
