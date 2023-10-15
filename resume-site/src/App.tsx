import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Component imports
import Header from './components/Header'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavBar/>
      <Header/>
    </div>

  )
}

export default App
