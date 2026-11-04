import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import NaoEncontrada from "./pages/NaoEncontrada"

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>&nbsp;          
          <Link to="/sobre">Sobre nós</Link>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />

            <Route path="*" element={<NaoEncontrada />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
