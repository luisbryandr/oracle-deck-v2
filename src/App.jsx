import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const drawCard = () => {
    // Add your card drawing logic here
    console.log('Drawing a card...')
  }

  return (
    <>
      <div>
      </div>
      <h1>Oracle Deck</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={() => drawCard()}>
        Draw a Card
      </button>
      <div className="card">
        <img src="/vite.svg" className="logo react" alt="React logo" />
        <img src="/vite.svg" className="logo vite" alt="Vite logo" />
      </div>

    </>
  )
}

export default App
