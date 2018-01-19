
import * as React from 'react';
import { findDOMNode } from 'react-dom';

import * as $ from 'jquery';
var echarts = require('echarts');

export interface LineChartProps {
}
export interface LineChartState {
}

export class LineChart extends React.Component<LineChartProps, LineChartState> {

    public myChart: any = null
    constructor(prop: LineChartProps, state: LineChartState) {
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
                data: [
                    'January'
                    ,'February'
                    ,'March'
                    ,'April'
                    ,'May'
                    ,'June'
                    ,'July'
                    ,'August'
                    ,'September'
                    ,'October'
                    ,'November'
                    ,'December'
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320,690,700,90,199,588],
                type: 'line'
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
            <h3>Prenotation in months</h3>
            <div ref="graph" style={{ height: '100%', width: '100%', minHeight: '400px' }}>

            </div>
        </div>
        )
    }

}