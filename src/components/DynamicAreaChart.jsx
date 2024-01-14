import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import cloneDeep from 'lodash.clonedeep';

const DynamicAreaGraph = () =>
{
    const DEFAULT_OPTION = {

        title: {
            text: '[ Area Graph ]',
            textAlign: 'auto',
            left: 'center',
            textVerticalAlign: 'top',
            padding: [30, 0, 0, 0]
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            icon: 'rect',
            top: 50
        },
        toolbox: {
            show: true,
            feature: {
                dataView: { readOnly: false },
                restore: {},
                saveAsImage: {}
            }
        },
        grid: {
            top: 100,
            left: 60,
            right: 60,
            bottom: 60
        },
        dataZoom: {
            show: false,
            start: 0,
            end: 100
        },
        visualMap: {
            show: false,
            min: 0,
            max: 1000,
            // color: ['#BE002F', '#F20C00', '#F00056', '#FF2D51', '#FF2121', '#FF4C00', '#FF7500',
            //     '#FF8936', '#FFA400', '#F0C239', '#FFF143', '#FAFF72', '#C9DD22', '#AFDD22',
            //     '#9ED900', '#00E500', '#0EB83A', '#0AA344', '#0C8918', '#057748', '#177CB0']
            color: ['#000080']
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: (function ()
                {
                    let now = new Date();
                    let res = [];
                    let len = 50;
                    while (len--)
                    {
                        res.unshift(now.toLocaleTimeString().replace(/^\D*/, ''));
                        now = new Date(now - 2000);
                    }
                    return res;
                })()
            }
        ],

        yAxis: [
            {
                type: 'value',
                scale: true,
                showSymbol: false,
                name: 'Temparature',
                max: 20,
                min: 0,
                boundaryGap: [0.2, 0.2]
            }
        ],
        series: [

            {
                name: 'Machine',
                type: 'line',
                showSymbol: false,
                color: '#000080',
                areaStyle: {},
                data: (function ()
                {
                    let res = [];
                    let len = 0;
                    while (len < 50)
                    {
                        res.push((Math.random() * 10 + 5).toFixed(1) - 0);
                        len++;
                    }
                    return res;
                })()
            }
        ]
    };



    const [option, setOption] = useState(DEFAULT_OPTION);

    function fetchNewData()
    {
        const axisData = (new Date()).toLocaleTimeString().replace(/^\D*/, '');
        const newOption = cloneDeep(option); // immutable
        // newOption.title.text = 'Hello Echarts-for-react.' + new Date().getSeconds();

        const data1 = newOption.series[0].data;

        data1.shift();
        data1.push((Math.random() * 10 + 5).toFixed(1) - 0);
        // time
        newOption.xAxis[0].data.shift();
        newOption.xAxis[0].data.push(axisData);


        setOption(newOption);
    }

    useEffect(() =>
    {


        const timer = setInterval(() =>
        {
            fetchNewData();
        }, 1000);

        return () => clearInterval(timer);
    });

    return (
        <div style={{ background: 'smoke', margin: '20px', border: '1px solid grey' }}>
            <ReactECharts
                option={option}
                style={{ height: 400 }}
            />
        </div>

    );
};

export default DynamicAreaGraph;