# Componente para visualização de dados temporais de estrelas

## Descrição da atividade

Esta atividade tem por objetivo a aplicação dos conceitos de Desenvolvimento Baseado em Componentes visto em sala de aula. Para isso, vocês deverão projetar e implementar um componente web, usando o framework React, para visualização de dados históricos de estrelas do GitHub.

Especificamente, a partir de um conjunto de dados provido como exemplo (descrito abaixo) vocês deverão construir um gráfico linear com o histórico das estrelas agrupado por dia, semana, mês e ano. Além desse agrupamento, deverá ser possível escolher a escala do eixo Y do gráfico entre linear ou logarítmica.

Abaixo segue a interface, descrita em Typescript, que o componente deverá apresentar.

```tsx
type TEstrela = Array<{ user: string; starred_at: Date }>;
type TAgrupamento = 'dia' | 'semana' | 'mes' | 'ano';
type TEscala = 'linear' | 'logaritmica';

interface GraficoEstrelas {
  estrelas: TEstrela;
  agrupamento?: TAgrupamento;
  escala?: TEscala;
}
```

Esse projeto é fornece um esqueleto para a atividade e vocês deverão trabalhar com base nele. Em especial, vocês deverão concentrar seus esforços principalmente no arquivo `src/components/GraficoEstrelas/index.jsx` que será o componente a ser implementado usando alguma biblioteca de sua preferência.

Esse arquivo já implementa a base do componente junto à definição de sua interface.

```jsx
export function GraficoEstrelas(props) {
  return <div>{'//TODO'}</div>;
}

GraficoEstrelas.propTypes = {
  estrelas: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.string.isRequired,
      starred_at: PropTypes.instanceOf(Date).isRequired,
    })
  ).isRequired,
  agrupamento: PropTypes.oneOf(['dia', 'semana', 'mes', 'ano']),
  escala: PropTypes.oneOf(['linear', 'log']),
};

GraficoEstrelas.defaultProps = {
  agrupamento: 'dia',
  escala: 'linear',
};
```

## Exemplo para inspiração

![Untitled](Untitled.png)

## Requisitos e instruções

Nessa atividade será necessário a instalação das seguintes ferramentas:

- [ ] [Node.js](https://nodejs.org/en/download)
- [ ] [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)
- [ ] [VSCode](https://code.visualstudio.com/download) (recomendado)

Para começar os trabalhos, você deve:

- [ ] Clonar esse repositório localmente
- [ ] Instalar as dependências (`yarn install`)

Por fim, você pode executar o servidor de desenvolvimento usando:

```bash
yarn dev
```

O servidor deverá ser iniciado e o endereço estará no console.

### Instruções adicionais para Replit

Para usar o projeto no Replit, você deve primeiro:

- [ ] Modificar o arquivo oculto `.replit` e substituir:

```bash
run = "npm run start"
# port
run = "npm run dev"
```

- [ ] Alterar o arquivo `vite.config.js` para:

```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
});
```

## Dicas de bibliotecas gráficas

<aside>
💡 Você pode escolher a biblioteca, mas segue algumas dicas
</aside>

[https://github.com/recharts/recharts](https://github.com/recharts/recharts)

[https://github.com/reactchartjs/react-chartjs-2](https://github.com/reactchartjs/react-chartjs-2)

[https://github.com/uber/react-vis](https://github.com/uber/react-vis)

<aside>
💡 Entre outras …
</aside>

[15 Best React Chart Libraries in 2022 | Technostacks](https://technostacks.com/blog/react-chart-libraries/)

## Dados de exemplo para entradas

O projeto conta com uma interface base para uso do componente e conta com três arquivos de dados para teste.

[stargazers_amzn-style-dictionary.json](../data/stargazers_amzn-style-dictionary.json)

[stargazers_openjdk-jfx.json](../data/stargazers_openjdk-jfx.json)

[stargazers_npkgz-cli-progress.json](../data/stargazers_npkgz-cli-progress.json)
