// @flow
import React from 'react'

type Props = {
  /** Fill color of the progress bar. */
  color?: string,
  /** Value between 0 and 1.0 */
  progress?: number,
  /** CSS style override. */
  style?: any,
}

//
// Render a progress bar.
export const ProgressBar = ({
  color = 'rgb(121,121,121)',
  progress = 0,
  style = {}
}: Props = {}) => (
  <div
    style={{
      backgroundColor: color,
      height: '0.5rem',
      width: `${Math.floor(progress * 100)}%`,
      transition: 'all 0.5s',
      ...style,
    }}
  />
)

export default ProgressBar
