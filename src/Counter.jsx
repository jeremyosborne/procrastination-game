import React, {useState} from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click HARDER
      </button>
    </div>
  )
}

export default Counter
