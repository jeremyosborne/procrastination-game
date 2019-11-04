import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './Counter'

export const main = ({
  rootId = '#achievements'
} = {}) => {
  let root = document.querySelector(rootId)

  if (!root) {
    root = document.createElement('div')
    root.id = rootId
    document.body.appendChild(root)
  }

  ReactDOM.render(
    <Counter />,
    root
  )
}

main()
