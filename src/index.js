import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './Counter'

export const main = ({
  rootId = 'achievements'
} = {}) => {
  ReactDOM.render(
    <Counter />,
    document.getElementById(rootId)
  )
}

main()
