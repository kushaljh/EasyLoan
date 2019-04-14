import React, { Component } from 'react';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryLegend } from 'victory';
// import {XYPlot, LineMarkSeries, LineSeries, MarkSeries, HorizontalGridLines, VerticalGridLines, XAxis,
// YAxis} from 'react-vis';

function calcCreditAmount() {
    const rate = 0.0003947945205; 
    let data = [{
        "x": 22, 
        "y": 5000, 
        "interest": 1.973972603
    }]
    
    let start = 22; 
    let current = 23; 
    let end = 720; 
    
    while (current !== end) {
        let amount = data[current - (start + 1)].y+ data[current - (start + 1)].interest; 
        let temp = {
            "x": current,
            "y" : amount,
            "interest": amount * rate
        }; 
        data.push(temp); 
        current++; 
    }

    data = data.map(x => {
        delete x.interest;
        return x;
    });
    console.log(data);
    return data; 
}

class LineChart extends Component {
    render() {
        let data1 = calcCreditAmount(); 
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
                    data = {data1}
                />

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

