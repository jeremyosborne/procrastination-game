// @flow
import React from 'react'

type Props = {
  /** Content of the card. */
  children?: React.node,
  /** CSS style override. */
  style?: any,
}

// Contain the chievements in their normal card view.
export const Card = ({
  children,
  style = {},
}: Props = {}) => (
  <div
    style={{
      backgroundColor: 'rgb(240,240,240)',
      display: 'flex',
      flexDirection: 'column',
      height: '8.5rem',
      justifyContent: 'space-between',
      margin: '0.3rem',
      width: '13.8rem',
      ...style,
    }}
  >
    {children}
  </div>
)

export default Card
