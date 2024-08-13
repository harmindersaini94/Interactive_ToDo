import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Components/Home'
import ViewComponent from './Components/ViewComponent'
import {Provider} from 'react-redux'
import todoStore from './store'

function App() {

  return (
    <Provider store={todoStore}>
        <Home />
        <ViewComponent />
    </Provider >
  )
}

export default App
