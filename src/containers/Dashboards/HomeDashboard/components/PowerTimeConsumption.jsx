import React from 'react';
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

const data = [
    {name: '08:30', Energy: 6000},
    {name: '09:00', Energy: 3000},
    {name: '09:30', Energy: 2000},
    {name: '10:00', Energy: 2780},
    {name: '10:30', Energy: 1890},
    {name: '11:00', Energy: 2390},
    {name: '11:30', Energy: 3490},
    {name: '12:00', Energy: 3490},
    {name: '12:30', Energy: 3490},
    {name: '13:00', Energy: 3490},
    {name: '13:30', Energy: 1890},
    {name: '14:00', Energy: 2390},
    {name: '14:30', Energy: 3576},
    {name: '15:00', Energy: 4679},
    {name: '15:00', Energy: 4679},
];

const PowerTimeConsumption = (props) => {
    return (
        <React.Fragment>
            {props.Data.map(mappedData => <PowerTimeList {...mappedData}/>)}
        </React.Fragment>

    )
};

const tickFormer = (tick) => {
    return `${tick / 1000}kW`;
};

const PowerTimeList = (props) => (

    <Panel xl={12} lg={6} md={12} sm={6}
           title={"Current Voltage"}
           subhead="The amount of energy which is being consumed."
    >
        <p className="dashboard__bounce-percent add_the_margin">{props.solar_energy_produced}kW</p>
        <ResponsiveContainer height={220} className="dashboard__area">
            <AreaChart
                data={data}
                margin={{
                    top: 0, right: 0, left: -15, bottom: 0,
                }}
            >
                <XAxis dataKey="name" tickLine={false}/>
                <YAxis tickLine={true} tickFormatter={tickFormer}/>
                <CartesianGrid vertical={false}/>
                <Tooltip/>
                <Area type="monotone" dataKey="Energy" stroke="#24d6a3" fill="#4ce1b6"
                      fillOpacity={0.3}/>
            </AreaChart>
        </ResponsiveContainer>
    </Panel>
);

PowerTimeConsumption.propTypes = {
    t: PropTypes.func.isRequired,
};

export default (PowerTimeConsumption);
