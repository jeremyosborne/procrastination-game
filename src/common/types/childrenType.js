import * as React from 'react'

//
// Declare support for the children property of a React component.
// The way to do this is funky due what gets exported by default vs. what
// gets a named export in React. See: https://flow.org/en/docs/react/children
//
export type childrenType = React.Node

export default childrenType
