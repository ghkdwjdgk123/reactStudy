import React from 'react';
import VolatilityChart from '.VolatilityChart.js';

const TopMovers = ({ topMoversData, windowSize }) => {
    const volatileStocks = topMoversData.map(data => {
        const dailyChanges = calculateDailyChanges(data.prices);
        const movingAverage = calculateMovingAverage(data.prices, windowSize);
        
        return {
            company: data.company,
            dates: data.dates,
            dailyChanges: dailyChanges,
            movingAverage: movingAverage,
        };
    });

    return (
        <div>
            {volatileStocks.map(stock => (
                <div key={stock.company}>
                    <h3>{stock.company}</h3>
                    <VolatilityChart stockData={stock} />
                </div>
            ))}
        </div>
    );
};

export default TopMovers;
