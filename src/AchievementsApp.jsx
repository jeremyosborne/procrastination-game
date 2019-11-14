import Achievements from 'Achievements'
import {AppState, reducer} from 'AppState'
import DebugStateView from 'DebugStateView'
import Achievement from 'Achievement'
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
      <DebugStateView />
    </AppState.Provider>
  )
}

export default AchievementsApp
