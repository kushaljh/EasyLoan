import React, { Component } from 'react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryLegend } from 'victory';
// import {XYPlot, LineMarkSeries, LineSeries, MarkSeries, HorizontalGridLines, VerticalGridLines, XAxis,
// YAxis} from 'react-vis';

class LineChart extends Component {
    render() {
        return (
            <VictoryChart
                theme={VictoryTheme.material}
                width={400}
                heigth={400}
                style={{ parent: { maxWidth: '500px', border: '1px solid black' } }}
                padding={{ top: 40, bottom: 40, left: 40, right: 100 }}
            >
                <VictoryLegend x={20} y={10}
                    orientation="horizontal"
                    gutter={20}
                    style={{ border: { stroke: 'black' } }}
                    data={[
                        { name: 'Credit Card Amount', symbol: { fill: 'tomato' }, labels: { fill: 'tomato' } },
                        { name: 'Personal Loan Amount', symbol: { fill: 'orange' }, labels: { fill: 'orange' } },
                    ]} />
                <VictoryLine
                    style={{
                        data: { stroke: '#c43a31' },
                        parent: { border: '1px solid #ccc' }
                    }}

                /> */}

                {/* <VictoryLine
                    style={{
                        data: { stroke: '#10c49a' },
                        parent: { border: '1px solid #bbb' }
                    }}
                    interpolation="natural"
                    data={[
                        { x: 4, y: 1 },
                        { x: 5, y: 0 },
                        { x: 2, y: 6 },
                        { x: 3, y: 7 },
                        { x: 4, y: 2 }
                    ]}

                />
                {/* <VictoryLine
                    samples={100}
                    style={{ data: { stroke: 'red' } }}
                    y={(d) => Math.cos(5 * Math.PI * d.x)}
                /> */}

            </VictoryChart>
        );
    }
}

export default LineChart;

/*

const series1 =[
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 }
];

const series2 = [
    { x: 4, y: 1 },
    { x: 5, y: 0 },
    { x: 2, y: 6 },
    { x: 3, y: 7 },
    { x: 4, y: 2 }
];

class LineChart extends React.Component {

    /*
    render() {

        return (
            <XYPlot height={200} width={200}
                colorType="linear"
                colorDomain={[0, 1]}
            >
            <LineSeries data={series1} color={0} />
            <LineSeries data={series2} color={1} />
          </XYPlot>
        );

    }*/
/*
    render() {
        const data = [
            {x: 0, y: 8},
            {x: 1, y: 5},
            {x: 2, y: 4},
            {x: 3, y: 9},
            {x: 4, y: 1},
            {x: 5, y: 7},
            {x: 6, y: 6},
            {x: 7, y: 3},
            {x: 8, y: 2},
            {x: 9, y: 0}
          ];
        return (
          <div className="App">
            <XYPlot width={1200} height={1200}>
                <XAxis/><YAxis/>
                <HorizontalGridLines />
                <VerticalGridLines />
                <LineMarkSeries data={data} strokeWidth={10} />
            </XYPlot>
          </div>
        );
      }

}

export default LineChart; */