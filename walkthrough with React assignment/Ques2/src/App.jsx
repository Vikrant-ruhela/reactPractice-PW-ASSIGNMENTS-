import './App.css'
import Button from "./components/Button"

function App() {

  return (
    <>
      <Button text="click me" onClick={() => { alert("button clicked") }} />
    </>
  )
}

export default App
