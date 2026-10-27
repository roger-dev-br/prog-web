import Cabecalho from "./componentes/Cabecalho";
import Vite from "./assets/vite.svg"
import Logo from "./assets/react.svg"

function App() {
  return (
    <>
      <Cabecalho 
        titulo="React"
        imagem={Logo}
      />

      <Cabecalho 
        titulo="Vite"
        imagem={Vite}
      />
    </>
  )
}

export default App;