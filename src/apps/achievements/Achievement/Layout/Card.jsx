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
export const Card = ({
  children,
  style = {},
}: Props = {}) => (
  <div
    style={{
      backgroundColor: 'rgb(240,240,240)',
      display: 'flex',
      // Prevent cards from being squished by flex container.
      flex: '0 0 auto',
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
