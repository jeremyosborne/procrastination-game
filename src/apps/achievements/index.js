import React from 'react'
import ReactDOM from 'react-dom'
import App from 'achievements/App'

export const main = ({
  rootId = 'achievements'
} = {}) => {
  let root = document.getElementById(rootId)

  if (!root) {
    root = document.createElement('div')
    root.id = rootId
    document.body.appendChild(root)
  }

  ReactDOM.render(
    <App />,
    root
  )
}

main()
