// @flow
import React from 'react'
import {childrenType, styleType} from 'common/types'

type Props = {
  /** Content of the card. */
  children?: childrenType,
  /** CSS style override. */
  style?: styleType,
}

// Contain the chievements in their normal card view.
export const Content = ({
  children,
  style = {},
}: Props = {}) => (
  <div
    style={{
      padding: '0.5rem',
      width: '100%',
      ...style,
    }}
  >
    {children}
  </div>
)

export default Content
