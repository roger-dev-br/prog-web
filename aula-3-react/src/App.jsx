import './App.css'
import Header from "./components/Header"
import Nav from "./components/Nav"

function App() {
  return (
    <>
      <Header />

      <Nav />

      <main>
        <p>
          Esta página é um exemplo simples para aprender HTML e CSS.
          Aqui você encontra informações sobre três raças de cachorros muito populares:
          Pastor Alemão, Golden Retriever e Rottweiler.
        </p>
      </main>

      <footer>
        <p>Exemplo criado para a disciplina de Programação Web</p>
      </footer>
    </>
  )
}

export default App
