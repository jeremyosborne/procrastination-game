import React from 'react'

type Props = {
  /** Content to show when in developer mode. */
  children?: React.node,
}

// Take an object, seralize it, and show it in all its dataful glory.
export const DeveloperModeOnly = ({
  children,
}: Props = {}) => {
  return (
    process.env.NODE_ENV === 'development' ?
      children
      :
      null
  )
}

export default DeveloperModeOnly
