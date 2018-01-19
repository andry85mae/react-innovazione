
import * as React from 'react';
import { findDOMNode } from 'react-dom';

import * as $ from 'jquery';
var echarts = require('echarts');

export interface BarChartProps{
}
export interface BarChartState {
}

export class BarChart extends React.Component<BarChartProps, BarChartState> {

    public myChart:any=null
    constructor(prop: BarChartProps, state: BarChartState) {
        super(prop, state);

    }

    componentDidMount() {

        const el = findDOMNode(this.refs.graph);
        $(el).addClass('ciao');
        // initialize echarts instance with prepared DOM
        this.myChart = echarts.init(el);
        // draw chart
        // specify chart configuration item and data
        const option = {
            xAxis: {
                type: 'category',
                data:['500C','Ferrari','Punto','Renault','Chevrolet']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [100000, 2000, 150000, 80000, 70000, 110000, 130000],
                type: 'bar'
            }]
        };

        // use configuration item and data specified to show chart
        this.myChart.setOption(option);
    }

     //Destroy chart before unmount.
     componentWillUnmount() {
        this.myChart.destroy();
    }

    render() {

        return (<div>
            <h3>Km by Cars</h3>
            <div ref="graph" style={{ height: '100%', width:'100%',minHeight:'400px' }}>

            </div>
        </div>
        )
    }

}