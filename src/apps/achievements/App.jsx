import Achievements from 'achievements/Achievements'
import Achievement from 'achievements/Achievement'
import AppStateView from 'achievements/AppStateView'
import EventListener from 'achievements/EventListener'
import Notifier from 'achievements/Notifier'
import {AppState, reducer} from 'achievements/state'
import * as achievements from 'achievements/state/achievements'
import React from 'react'

export const App = () => {
  const initialState = {}
  const [state, dispatch] = React.useReducer(reducer, initialState)

  // We show two different views depending on whether the first achievement has
  // been unlocked or not.
  const unlockAchievements = achievements.isAchieved(state, achievements.IDS.UNLOCK_ACHIEVEMENTS)
  const unlockAchievementsProgress = achievements.unlockAchievementsProgress(state)

  return (
    <AppState.Provider value={{state, dispatch}}>
      <EventListener />
      <AppStateView />
      <Notifier />
      {/*
        When the achievements have not been unlocked, show a progress bar at
        the bottom of the screen to hint that something is happening.

        When the achievements are unlocked, hide the progress bar and show the
        achievements drawer.
      */}
      <div
        style={{
          bottom: 0,
          left: 0,
          position: 'fixed',
          // The components manage their achievability, so they need to be
          // mounted in the page (display: none no workee).
          visibility: unlockAchievements ? 'visible' : 'hidden',
          width: '100%',
        }}
      >
        <Achievement.Drawer>
          <Achievements.UnlockAchievements />
          <Achievements.StayinAlive />
        </Achievement.Drawer>
      </div>
      <div
        style={{
          bottom: 0,
          display: unlockAchievements ? 'none' : 'block',
          left: 0,
          position: 'fixed',
          width: '100%',
        }}
      >
        {unlockAchievements ? null : <Achievement.Layout.ProgressBar progress={unlockAchievementsProgress} />}
      </div>
    </AppState.Provider>
  )
}

export default App
