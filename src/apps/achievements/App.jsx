import Achievements from 'achievements/Achievements'
import Achievement from 'achievements/Achievement'
import AppStateView from 'achievements/AppStateView'
import EventListener from 'achievements/EventListener'
import Notifier from 'achievements/Notifier'
import PersistState from 'achievements/PersistState'
import {AppState, reducer} from 'achievements/state'
import * as achievements from 'achievements/state/achievements'
import React from 'react'

//
// Root component for the achievements application.
//
// All top level components should be defined here and this component is
// assumed to be `ReactDOM.render`ed in another component.
//
// This component gets wrapped in a mount function and exported in the module
// `index.js`.
//
export const App = () => {
  let initialState
  try {
    // See PersistState for how the data gets saved.
    initialState = JSON.parse(window.localStorage['jwo-achievements'] || '{}')
  } catch (err) {
    console.warn('Could not read value stored for achievements state. Reverting to empty initial state.')
    initialState = {}
  }
  const [state, dispatch] = React.useReducer(reducer, initialState)

  // We show two different views depending on whether the first achievement has
  // been unlocked or not.
  const unlockAchievements = achievements.isAchieved(state, achievements.IDS.UNLOCK_ACHIEVEMENTS)
  const unlockAchievementsProgress = achievements.unlockAchievementsProgress(state)

  const clickingForCookiesAchieved = achievements.isAchieved(state, achievements.IDS.CLICKING_FOR_COOKIES)

  return (
    <AppState.Provider value={{state, dispatch}}>
      <EventListener />
      <AppStateView />
      <PersistState />
      <Notifier />
      {/*
        Extra cookie award. Since the drawer is fixed position, this needs to
        be outside of it.
      */}
      {
        clickingForCookiesAchieved ?
          <a href='https://orteil.dashnet.org/cookieclicker/' rel='external noopener noreferrer' target='_blank' title='go click some cookies'>
            <img
              alt='cookie'
              src='cookie-for-clicking.png'
              style={{
                height: 243, // original height = 487
                position: 'absolute',
                right: 15,
                top: 200,
                width: 250, // original width = 500
                zIndex: -1,
              }}
            />
          </a>
          :
          null
      }
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
          <Achievements.WebCrawler />
          <Achievements.ClickingForCookies />
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
        {/*
          When the achievements have not been unlocked, show a progress bar at
          the bottom of the screen to hint that something is happening.

          When the achievements are unlocked, hide the progress bar and show the
          achievements drawer.
        */}
        {unlockAchievements ? null : <Achievement.Layout.ProgressBar progress={unlockAchievementsProgress} />}
      </div>
    </AppState.Provider>
  )
}

export default App
