import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import ViewComponent from './Components/ViewComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Home />
        <ViewComponent />
    </>
  )
}

export default App
