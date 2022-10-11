import { useState } from 'react'
import './App.css'
import CounterSettings from './components/CounterSettings'
import TheRealCounter from './components/TheRealCounter'

function App() {
  const [count, setCount] = useState(5)
  const [countToAdd, setCountToAdd] = useState(0)

  function incrementCountToAdd() {
    setCountToAdd(countToAdd + 1)
  }
  function decrementCountToAdd() {
    setCountToAdd(countToAdd - 1)
  }

  function resetCount() {
    setCount(0)
  }

  function incrementCount() {
    setCount(count + countToAdd)
  }
  function decrementCount() {
    setCount(count - countToAdd)
  }

  function handleNumberInput(number) {
    setCountToAdd(number)
  }

  return (
    <div className="App" style={{ display: 'flex', widht: '100vw' }}>
      <TheRealCounter
        count={count}
        countToAdd={countToAdd}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        handleNumberInput={handleNumberInput}
      />
      <CounterSettings
        reset={resetCount}
        countToAdd={countToAdd}
        incrementCountToAdd={incrementCountToAdd}
        decrementCountToAdd={decrementCountToAdd}
      />
    </div>
  )
}

export default App
