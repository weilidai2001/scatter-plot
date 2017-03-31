import React from 'react';
import { ScatterplotChart } from 'react-easy-chart';

const data = [
    {
        x: 1,
        y: 5
    },
    {
        x: 3,
        y: 1
    },
    {
        x: 0,
        y: 6
    },
    {
        x: 5,
        y: 2
    },
    {
        x: 4,
        y: 4
    },
    {
        x: 5,
        y: 9
    },
    {
        x: 9,
        y: 1
    },
    {
        x: 5,
        y: 6
    },
    {
        x: 3,
        y: 9
    },
    {
        x: 7,
        y: 9
    }
];

export default class Homepage extends React.Component {
    render() {
        return (
            <ScatterplotChart data={data} />
        )
    }
}