import Cabecalho from "./componentes/Cabecalho"
import Rodape from "./componentes/Rodape"
import Menu from "./componentes/Menu"

function App() {
  return (
    <>
      <Cabecalho />

      <Menu />

      <main>
        <p>
          Esta página é um exemplo simples para aprender HTML e CSS.
          Aqui você encontra informações sobre três raças de cachorros muito populares:
          Pastor Alemão, Golden Retriever e Rottweiler.
        </p>
      </main>

      <Rodape />
    </>
  )
}

export default App
