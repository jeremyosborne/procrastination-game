// @flow
import React from 'react'

type Props = {
  /** Content of the card. */
  children?: React.node,
  /** CSS style override. */
  style?: any,
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
