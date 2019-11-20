import classNames from 'classnames'
import {classNamesType, styleType} from 'common/types'
import React from 'react'

type Props = {
  className?: classNamesType,
  // The JavaScript object to serialize and view.
  data?: any,
  style?: styleType,
}

// Take an object, seralize it, and show it in all its dataful glory.
export const JSONView = ({
  className = '',
  data = {},
  style = {},
}: Props = {}) => {
  return (
    <pre className={classNames(className)} style={style}>
      {JSON.stringify(data, null, 4)}
    </pre>
  )
}

export default JSONView
