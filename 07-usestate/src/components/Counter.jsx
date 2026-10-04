import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ margin: "12px" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button
        onClick={() => {
          setCount((prev) => prev + 1)
          setCount((prev) => prev + 1)
          setCount((prev) => prev + 1)
        }}
      >
        +3
      </button>
    </div>
  )
}

export default Counter
