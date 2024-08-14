import './App.css'
import Home from './Components/Home'
import ViewComponent from './Components/ViewComponent'
import {Provider} from 'react-redux'
import todoStore from './store'
import Background from './Components/Background'

function App() {

  return (
    <Provider store={todoStore}>
      <Background />
        <Home />
        <ViewComponent />
    </Provider >
  )
}

export default App
