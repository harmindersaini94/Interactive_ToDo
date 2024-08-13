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
