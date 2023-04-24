import React, { useState } from 'react';
import { GraficoEstrelas } from './components/GraficoEstrelas';

import './App.css';

import styleDictionary from '../data/stargazers_amzn-style-dictionary.json';
import cliProgress from '../data/stargazers_npkgz-cli-progress.json';
import jfx from '../data/stargazers_openjdk-jfx.json';

/**
 * Função auxiliar para transformação dos dados.
 * Basicamente mapeia o usuário e transforma a data em um objeto Date.
 */
function prepareDados(dados) {
  return dados.map((dado) => ({ user: dado.user, starred_at: new Date(dado.starred_at) }));
}

/**
 * Componente principal da aplicação.
 */
function App() {
  // Inicializa os dados com os dados do cli-progress.
  const [dados, setDados] = useState(prepareDados(cliProgress));
  // Inicializa o agrupamento com o dia.
  const [agrupamento, setAgrupamento] = useState('dia');
  // Inicializa a escala com a linear.
  const [escala, setEscala] = useState('linear');
  // Inicializa o cumulativo com falso.
  const [cumulativo, setCumulativo] = useState(false);

  // Função auxiliar para tratar do evento de mudança de dados.
  const onChangeDados = (event) => {
    switch (event.target.value) {
      case 'jfx':
        setDados(prepareDados(jfx));
        break;
      case 'style-dictionary':
        setDados(prepareDados(styleDictionary));
        break;
      default:
        setDados(prepareDados(cliProgress));
    }
  };

  // Renderiza o componente.
  return (
    <div className="App">
      <div className="grafico">
        <GraficoEstrelas
          estrelas={dados}
          agrupamento={agrupamento}
          escala={escala}
          cumulativa={cumulativo}
        />
      </div>
      <div className="controles">
        <div className="dados">
          <label htmlFor="dados">Dados: </label>
          <select id="dados" onChange={onChangeDados}>
            <option value="cli-progress">npkgz/cli-progress</option>
            <option value="jfx">openjdk/jfx</option>
            <option value="style-dictionary">amzn/style-dictionary</option>
          </select>
        </div>
        <div className="agrupamento">
          <label htmlFor="agrupamento">Agrupamento: </label>
          <select id="agrupamento" onChange={(event) => setAgrupamento(event.target.value)}>
            <option value="dia">Dia</option>
            <option value="semana">Semana</option>
            <option value="mes">Mês</option>
            <option value="ano">Ano</option>
          </select>
        </div>
        <div className="escala">
          <label htmlFor="escala">Escala: </label>
          <select id="escala" onChange={(event) => setEscala(event.target.value)}>
            <option value="linear">Linear</option>
            <option value="log">Logarítmica</option>
          </select>
        </div>
        <div className="cumulativo">
          <label htmlFor="cumulativo">Cumulativo: </label>
          <select
            id="cumulativo"
            onChange={(event) => setCumulativo(event.target.value === 'true')}
          >
            <option value="false">Não</option>
            <option value="true">Sim</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
