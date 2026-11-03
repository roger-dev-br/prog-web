import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Cabecalho from "./componentes/Cabecalho";
import Vite from "./assets/vite.svg"
import Logo from "./assets/react.svg"

function App() {
  return (
    <BrowserRouter>

      <Cabecalho
        titulo="React"
        imagem={Logo}
      />

      <nav>
        <Link to="/">Início</Link> | <Link to="/sobre">Vai pro b</Link>
      </nav>

      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<p>Página inicial</p>} />
          <Route path="/sobre" element={<Cabecalho titulo="Vite" imagem={Vite} />} />
        </Routes>
      </main>

    </BrowserRouter>
  )
}

export default App;
