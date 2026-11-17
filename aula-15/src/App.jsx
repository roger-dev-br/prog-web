import { useState } from "react";
import "./App.css";

// Endereço "vazio": usado no início e quando clicamos em "Limpar"
const enderecoVazio = {
  logradouro: "",
  bairro: "",
  localidade: "",
  uf: "",
};

function App() {
  // ---------------------------------------------------------------
  // ESTADOS (useState)
  // Cada informação que aparece na tela e pode mudar vira um estado.
  // ---------------------------------------------------------------
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState(enderecoVazio); // preenchido pela API
  const [numero, setNumero] = useState(""); // preenchido pelo usuário
  const [complemento, setComplemento] = useState(""); // preenchido pelo usuário
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  // ---------------------------------------------------------------
  // BUSCAR O CEP NA API
  // Usamos a API pública ViaCEP: https://viacep.com.br/ws/{cep}/json/
  //
  // Por que NÃO usamos useEffect aqui?
  // A busca acontece por uma AÇÃO do usuário (clicar no botão).
  // Então o lugar certo é a função chamada no evento (onSubmit).
  // ---------------------------------------------------------------
  async function buscarCep(evento) {
    // Impede o formulário de recarregar a página
    evento.preventDefault();

    // 1. Deixa só os números (ex.: "01001-000" vira "01001000")
    const cepLimpo = cep.replace(/\D/g, "");

    // 2. Valida: o CEP precisa ter 8 dígitos
    if (cepLimpo.length !== 8) {
      setErro("Digite um CEP com 8 números.");
      return;
    }

    setErro("");
    setCarregando(true);

    try {
      // 3. Faz a requisição para a API e espera a resposta (await)
      const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);

      // 4. Converte a resposta de texto para um objeto JavaScript
      const dados = await resposta.json();
      console.log("Dados recebidos da API:", dados);

      // 5. A ViaCEP retorna { erro: true } quando o CEP não existe
      if (dados.erro) {
        setErro("CEP não encontrado.");
        setEndereco(enderecoVazio);
        return;
      }

      // 6. Tudo certo: guarda os dados no estado -> a tela atualiza sozinha
      setEndereco({
        logradouro: dados.logradouro,
        bairro: dados.bairro,
        localidade: dados.localidade,
        uf: dados.uf,
      });
    } catch {
      // Cai aqui se não tiver internet ou a API estiver fora do ar
      setErro("Erro ao buscar o CEP. Verifique sua conexão.");
    } finally {
      // O finally SEMPRE executa, dando certo ou errado
      setCarregando(false);
    }
  }

  // Atualiza só um campo do objeto endereco (ex.: o usuário corrigiu a rua)
  function alterarEndereco(campo, valor) {
    setEndereco({ ...endereco, [campo]: valor });
  }

  function limpar() {
    setCep("");
    setEndereco(enderecoVazio);
    setNumero("");
    setComplemento("");
    setErro("");
  }

  return (
    <div className="container">
      <h1>Busca de CEP</h1>

      {/* Usamos <form> para que a tecla Enter também faça a busca */}
      <form onSubmit={buscarCep}>
        <label htmlFor="cep">CEP</label>
        <div className="linha-cep">
          <input
            id="cep"
            type="text"
            placeholder="Ex.: 01001-000"
            maxLength={9}
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <button type="submit" disabled={carregando}>
            {carregando ? "Buscando..." : "Buscar"}
          </button>
        </div>
      </form>

      {/* Renderização condicional: só mostra o <p> se existir erro */}
      {erro && <p className="erro">{erro}</p>}

      <label htmlFor="logradouro">Rua</label>
      <input
        id="logradouro"
        value={endereco.logradouro}
        onChange={(e) => alterarEndereco("logradouro", e.target.value)}
      />

      <label htmlFor="numero">Número</label>
      <input id="numero" value={numero} onChange={(e) => setNumero(e.target.value)} />

      <label htmlFor="complemento">Complemento</label>
      <input id="complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} />

      <label htmlFor="bairro">Bairro</label>
      <input id="bairro" value={endereco.bairro} onChange={(e) => alterarEndereco("bairro", e.target.value)} />

      <label htmlFor="localidade">Cidade</label>
      <input
        id="localidade"
        value={endereco.localidade}
        onChange={(e) => alterarEndereco("localidade", e.target.value)}
      />

      <label htmlFor="uf">UF</label>
      <input id="uf" value={endereco.uf} onChange={(e) => alterarEndereco("uf", e.target.value)} />

      <button type="button" className="botao-limpar" onClick={limpar}>
        Limpar
      </button>
    </div>
  );
}

export default App;
