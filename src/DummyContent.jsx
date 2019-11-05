import React from 'react'
import NotRedux from './NotRedux'

export const DummyContent = () => {
  const {state} = React.useContext(NotRedux)

  return (
    <div>
      {JSON.stringify(state)}
    </div>
  )
}

export default DummyContent
