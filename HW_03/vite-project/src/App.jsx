import { useState } from 'react'
import './App.css'
import DeletionTimer from './components/DeletionTimer/DeletionTimer'

function App() {
  const [isActive, setIsActive] = useState(true)

  const toggleActive = () => {
    setIsActive(prev => !prev)
  }

  return <>
    <h1>Deletion Timer App</h1>

    <button onClick={toggleActive}>
      {isActive ? 'Деактивувати' : 'Активувати'}
    </button>

    {isActive && (
      <DeletionTimer setIsActive={setIsActive} />
    )}
  </>
}

export default App
