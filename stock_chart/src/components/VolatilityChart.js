import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const VolatilityChart = ({ stockData }) => {
    const formattedData = stockData.dates.map((date, index) => ({
        date,
        dailyChange: stockData.dailyChanges[index],
        movingAverage: stockData.movingAverage[index],
    }));

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={formattedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="dailyChange" stroke="#8884d8" name="Daily Change" />
                <Line type="monotone" dataKey="movingAverage" stroke="#82ca9d" name="Moving Average" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default VolatilityChart;
