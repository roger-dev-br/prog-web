import { useState } from "react";
import hero from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Contador</h1>
      <h2>{count}</h2>

      <img src={hero} height={100} width={100} alt="Logo"></img>
 
      <button onClick={() => setCount(count + 1)}>
        Aumentar
      </button>
      
      <button onClick={() => setCount(count - 1)}>
        Diminuir
      </button>

      <button onClick={() => setCount(0)}>
        Zerar
      </button>
    </>
  )
}

export default App;