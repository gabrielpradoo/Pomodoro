import { useState } from 'react'
import Header from './Components/Header'
import CountDown from './Components/CountDown'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='containerGeral'>
      <Header />
      <CountDown />
    </div>
  )
}

export default App;
