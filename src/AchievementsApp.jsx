import Achievements from 'Achievements'
import {AppState, reducer} from 'AppState'
import Achievement from 'Achievement'
import {JSONView} from 'developer'
import EventListener from 'EventListener'
import React from 'react'

export const AchievementsApp = () => {
  const initialState = {}
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <AppState.Provider value={{state, dispatch}}>
      <EventListener />
      <Achievement.Drawer>
        <Achievements.UnlockAchievements />
        <Achievements.StayinAlive />
      </Achievement.Drawer>
      <JSONView data={state} />
    </AppState.Provider>
  )
}

export default AchievementsApp
