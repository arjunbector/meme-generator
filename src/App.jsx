import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Meme from './Components/Meme/Meme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <Header/>
      <Meme/>
    </main>
    </>
  )
}

export default App
