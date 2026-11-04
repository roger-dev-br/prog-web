# React + Vite + Router

## Instalar a biblioteca react-router-dom
```bash
npm install react-router-dom
```

## Estrutura recomendada
```
src/
├── pages/
│   ├── Home.jsx
│   ├── Sobre.jsx
│   └── NaoEncontrada.jsx
├── App.jsx
└── main.jsx
```

## Criando as telas
```
// src/pages/Home.jsx
function Home() {
  return <h1>Página Inicial</h1>;
}

export default Home;
```

```
function Sobre() {
  return <h1>Sobre Nós</h1>;
}

export default Sobre;
```

```
function NaoEncontrada() {
  return <h1>404 - Página Não Encontrada</h1>;
}

export default NaoEncontrada;
```

## Configurando as Rotas e os Links no App.jsx
Os quatro componentes fundamentais do react-router-dom são:

BrowserRouter: Envolve a aplicação e monitora a URL do navegador.

Routes: Agrupa e define a lista de rotas disponíveis.

Route: Mapeia o caminho (path) para o componente (element).

Link: Substitui a tag <a> do HTML para navegar sem disparar reload da página.

```javascript
// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import NaoEncontrada  from './pages/NaoEncontrada';

export function App() {
  return (
    <BrowserRouter>
      {/* Barra de Navegação */}
      <nav style={{ display: 'flex', gap: '15px', padding: '10px', background: '#f4f4f4' }}>
        {/* NUNCA use <a href="...">, use sempre <Link to="..."> */}
        <Link to="/">Início</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>

      {/* Definição das Rotas */}
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          
          {/* Rota coringa para tratar erros 404 */}
          <Route path="*" element={<NaoEncontrada />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
```
