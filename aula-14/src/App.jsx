import { useState, useEffect } from "react";
import "./App.css";

function calcular(numero1, numero2, operacao) {
  if (numero1 === "" || numero2 === "") return null;

  const a = Number(numero1);
  const b = Number(numero2);

  switch (operacao) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b === 0 ? "Erro: divisão por zero" : a / b;
  }
}

function App() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [operacao, setOperacao] = useState("+");

  // O histórico começa com o que estiver salvo no localStorage
  const [historico, setHistorico] = useState(() => {
    const salvo = localStorage.getItem("historico");
    return salvo ? JSON.parse(salvo) : [];
  });

  // console.log('Renderizando...');

  // ---------------------------------------------------------------
  // ATENÇÃO: o resultado NÃO precisa de useEffect!
  // Ele é calculado a partir de outros estados, então basta
  // calcular direto na renderização. Colocar setResultado dentro
  // de um useEffect causaria uma renderização extra (o ESLint avisa).
  // Regra: useEffect é para sincronizar com coisas FORA do React.
  // ---------------------------------------------------------------
  const resultado = calcular(numero1, numero2, operacao);

  // ---------------------------------------------------------------
  // EXEMPLO 1: useEffect com array de dependências VAZIO []
  // Executa UMA vez, quando o componente aparece na tela (montagem).
  // A função retornada (cleanup) roda quando o componente sai da tela.
  // ---------------------------------------------------------------
  useEffect(() => {
    console.log("✅ Calculadora montada!");

    // Carrega dados do histórico caso existam
    const localHistory = localStorage.getItem("historico");
    if (localHistory) {
      const jsonHistory = JSON.parse(localHistory);
      setHistorico(jsonHistory);
    }

    return () => {
      console.log("❌ Calculadora desmontada!");
    };
  }, []);

  // ---------------------------------------------------------------
  // EXEMPLO 2: useEffect COM dependências [resultado]
  // Executa toda vez que o resultado mudar.
  // Atualiza o título da aba do navegador (algo FORA do React).
  // ---------------------------------------------------------------
  useEffect(() => {
    console.log("🔄 Resultado mudou:", resultado);
    document.title = resultado === null ? "Calculadora" : `Resultado: ${resultado}`;
  }, [resultado]);

  // ---------------------------------------------------------------
  // EXEMPLO 3: useEffect para salvar dados
  // Sempre que o histórico mudar, salva no localStorage.
  // (Recarregue a página e veja que o histórico continua lá!)
  // ---------------------------------------------------------------
  useEffect(() => {
    localStorage.setItem("historico", JSON.stringify(historico));
  }, [historico]);

  // ---------------------------------------------------------------
  // EXEMPLO 4: useEffect com CLEANUP (limpeza)
  // Adiciona um "ouvinte" de teclado. Tecla ESC limpa a calculadora.
  // O return remove o ouvinte para não acumular vários.
  // ---------------------------------------------------------------
  useEffect(() => {
    function aoPressionarTecla(evento) {
      if (evento.key === "Escape") {
        limpar();
      }
    }

    window.addEventListener("keydown", aoPressionarTecla);
    console.log("⌨️ Ouvinte de teclado adicionado");

    return () => {
      window.removeEventListener("keydown", aoPressionarTecla);
      console.log("🧹 Ouvinte de teclado removido");
    };
  }, []);

  function limpar() {
    setNumero1("");
    setNumero2("");
    setOperacao("+");
  }

  function salvarNoHistorico() {
    if (resultado === null || typeof resultado === "string") return;
    const conta = `${numero1} ${operacao} ${numero2} = ${resultado}`;
    setHistorico([conta, ...historico]);
  }

  return (
    <div className="calculadora">
      <h1>Calculadora</h1>

      <div className="campos">
        <input type="number" placeholder="Número 1" value={numero1} onChange={(e) => setNumero1(e.target.value)} />

        <select value={operacao} onChange={(e) => setOperacao(e.target.value)}>
          <option value="+">+</option>
          <option value="-">−</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>

        <input type="number" placeholder="Número 2" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
      </div>

      <div className="resultado">{resultado === null ? "Digite dois números" : `= ${resultado}`}</div>

      <div className="botoes">
        <button onClick={salvarNoHistorico}>Salvar no histórico</button>
        <button onClick={limpar}>Limpar (Esc)</button>
      </div>

      <h2>Histórico</h2>
      {historico.length === 0 ? (
        <p className="vazio">Nenhuma conta salva.</p>
      ) : (
        <>
          <ul>
            {historico.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button onClick={() => setHistorico([])}>Apagar histórico</button>
        </>
      )}
    </div>
  );
}

export default App;
