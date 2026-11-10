import { useState } from 'react'
import './App.css'
import Titulo from './Titulo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <Titulo titulo="Meu primeiro componente React!!!" />

        <Titulo titulo={count} onClick={() => setCount(count + 1)} />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
