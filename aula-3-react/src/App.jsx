import './App.css'
import Header from "./components/Header"

function App() {
  return (
    <>
      <Header />

      <nav>
        <ul>
          <li>
            <a href="pastor-alemao.html">
              <img src="imagens/pa-001.png" alt="Pastor Alemão" />
              <p>Pastor Alemão</p>
            </a>
          </li>
          <li>
            <a href="golden-retriever.html">
              <img src="imagens/gr-001.png" alt="Golden Retriever" />
              <p>Golden Retriever</p>
            </a>
          </li>
          <li>
            <a href="rottweiler.html">
              <img src="imagens/rw-001.png" alt="Rottweiler" />
              <p>Rottweiler</p>
            </a>
          </li>
        </ul>
      </nav>

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
