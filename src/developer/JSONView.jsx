import classNames from 'classnames'
import React from 'react'
import {classNamesType, styleType} from 'types'

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
