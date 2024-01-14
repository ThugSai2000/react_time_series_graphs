import React from 'react'
import ReactEchartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent, DatasetComponent, TitleComponent, LegendComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

echarts.use(
    [TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer, LegendComponent]
)
const data = [
    { name: 'Sales', value: 120 },
    { name: 'Marketing', value: 200 },
    { name: 'Development', value: 150 },
    { name: 'Support', value: 80 },
    { name: 'HR', value: 50 },
];
const BarGraph = () =>
{
    const getOption = () =>
    {
        return {
            title: {
                text: "[ Line Graph ]",
                textAlign: 'auto',
                left: 'center',
                textVerticalAlign: 'top',
                padding: [30, 0, 0, 0]

            },
            legend: {

                data: ["DataSet-1"],
                icon: 'rect',
                top: 50
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: data.map((item) => item.name),
                axisLabel: {
                    interval: 0, // Show all labels
                },
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                    name: 'DataSet-1',
                    type: 'bar',
                    data: data.map((item) => item.value),
                    itemStyle: {
                        color: 'lightblue',
                    },
                },
            ],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                },
            },
            grid: {
                top: 100,
                left: 60,
                right: 60,
                bottom: 60
            },
        };
    };



    return (
        <div style={{ background: 'smoke', margin: '20px', border: '1px solid grey' }}>
            <ReactEchartsCore
                echarts={echarts}
                option={getOption()}
                style={{ height: '500px' }}
                notMerge={true}
                lazyUpdate={true}
            />
        </div>

    )
}

export default BarGraph
