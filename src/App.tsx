import { useState } from 'react'
import './App.css'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <div />
      <h1>Vite + React</h1>
      <div className='card'>
        <h1 className='text-3xl font-bold underline font-custom'>
          Hello world!
        </h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
