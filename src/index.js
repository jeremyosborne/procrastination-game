import React from 'react'
import ReactDOM from 'react-dom'
import AchievementsApp from './AchievementsApp'

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
    <AchievementsApp />,
    root
  )
}

main()
