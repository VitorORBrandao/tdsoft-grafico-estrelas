import React from 'react';
import PropTypes from 'prop-types';
import { XYPlot, VerticalBarSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis } from 'react-vis';

/**
 * Componente que representa o gráfico de estrelas.
 * Descrição completa está no README.md.
 *
 * PS: O código abaixo é apenas um esqueleto para vocês implementarem.
 *     Vocês podem (e devem) alterar tudo que quiserem, menos a interface
 *     Além disso, usem dos componentes que forem necessários, para issio importem o pacote junto aos "imports".
 */
export function GraficoEstrelas(props) {
    console.log(props.estrelas)
    const data = [
        { x: 0, y: 8 },
        { x: 1, y: 5 },
        { x: 2, y: 4 },
        { x: 3, y: 9 },
        { x: 4, y: 1 },
        { x: 5, y: 7 },
        { x: 6, y: 6 },
        { x: 7, y: 3 },
        { x: 8, y: 2 },
        { x: 9, y: 0 }
    ];

    return (
        <XYPlot height={300} width={300}>
            <VerticalBarSeries data={data} />
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
        </XYPlot>)
}

// Definição dos tipos das propriedades recebidas.
GraficoEstrelas.propTypes = {
    estrelas: PropTypes.arrayOf(
        PropTypes.shape({
            user: PropTypes.string.isRequired,
            starred_at: PropTypes.instanceOf(Date).isRequired,
        })
    ).isRequired,
    agrupamento: PropTypes.oneOf(['dia', 'semana', 'mes', 'ano']),
    escala: PropTypes.oneOf(['linear', 'log']),
    cumulativa: PropTypes.bool,
};

// Definição dos valores padrão das propriedades.
GraficoEstrelas.defaultProps = {
    agrupamento: 'dia',
    escala: 'linear',
    cumulativa: false,
};