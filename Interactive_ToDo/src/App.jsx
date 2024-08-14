import "./App.css";
import Home from "./Components/Home";
import ViewComponent from "./Components/ViewComponent";
import { Provider } from "react-redux";
import todoStore from "./store";
import Background from "./Components/Background";

function App() {
  return (
    <Background>
      <Provider store={todoStore}>
        <Home />
        <ViewComponent />
      </Provider>
    </Background>
  );
}

export default App;
