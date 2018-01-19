
import * as React from 'react';
import { findDOMNode } from 'react-dom';

import * as $ from 'jquery';
var echarts = require('echarts');

export interface DoughnutChartProps{
}
export interface DoughnutChartState {
}

export class DoughnutChart extends React.Component<DoughnutChartProps, DoughnutChartState> {

    public myChart:any=null
    constructor(prop: DoughnutChartProps, state: DoughnutChartState) {
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
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['500C','Ferrari','Punto','Renault','Chevrolet']
            },
            series: [
                {
                    name:'Use of cars',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'500C'},
                        {value:310, name:'Ferrari'},
                        {value:234, name:'Punto'},
                        {value:135, name:'Renault'},
                        {value:1548, name:'Chevrolet'}
                    ]
                }
            ]
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
            <h3>Prenotation by Cars</h3>
            <div ref="graph" style={{ height: '100%', width:'100%',minHeight:'400px' }}>

            </div>
        </div>
        )
    }

}