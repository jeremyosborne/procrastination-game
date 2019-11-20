import Achievements from 'achievements/Achievements'
import Achievement from 'achievements/Achievement'
import AppStateView from 'achievements/AppStateView'
import EventListener from 'achievements/EventListener'
import {AppState, reducer} from 'achievements/state'
import _ from 'lodash'
import React from 'react'

const isAchieved = (state, id) => !!_.get(state, `achievements.${id}`)

export const App = () => {
  const initialState = {}
  const [state, dispatch] = React.useReducer(reducer, initialState)

  // We show two different views depending on whether the first achievement has
  // been unlocked or not.
  const achievementsUnlocked = isAchieved(state, Achievements.ACHIEVEMENT_IDS.UNLOCK_ACHIEVEMENTS)

  return (
    <AppState.Provider value={{state, dispatch}}>
      <EventListener />
      <AppStateView />
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          // The components manage their achievability, so they need to be
          // mounted in the page (display: none no workee).
          visibility: achievementsUnlocked ? 'visible' : 'hidden',
          width: '100%',
        }}
      >
        <Achievement.Drawer>
          <Achievements.UnlockAchievements />
          <Achievements.StayinAlive />
        </Achievement.Drawer>
      </div>
    </AppState.Provider>
  )
}

export default App
