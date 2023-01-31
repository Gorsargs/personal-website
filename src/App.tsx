import Desktop from "./components/Desktop/Desktop"
import Taskbar from "./components/Taskbar/Taskbar"
import "./App.css"

const App = () => {
  return <div className="App">
    <Desktop/>
    <Taskbar/>
  </div>
}

export default App
