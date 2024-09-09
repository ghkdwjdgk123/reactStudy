import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StockChart = ({ stockData }) => {
    const formattedData = stockData.dates.map((date, index) => ({
        date,
        price: stockData.prices[index],
    }));

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={formattedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="price" stroke="#8884d8" name="Stock Price" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default StockChart;
