import { useState } from 'react'
import Button from "./components/button/Button"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button type="primary">Click me!</Button>
      <Button type="danger">Click me!</Button>
      <Button type="success">Click me!</Button>
    </>
  )
}

export default App
