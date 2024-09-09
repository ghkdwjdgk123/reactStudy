import React, { useEffect, useState } from 'react';
import TopMovers from '/components/TopMovers.js';
import { fetchStockData } from '/api/stockApi.js';
import { calculateTopMovers } from './utils/calculateTopMovers';
import './App.css';

const App = () => {
    const [topMoversData, setTopMoversData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchStockData(/* parameters */);
            const topMovers = calculateTopMovers(data);
            setTopMoversData(topMovers);
        };
        fetchData();
    }, []);

    return (
        <div className="App">
            <h1>Top 10 Volatile Stocks</h1>
            <TopMovers topMoversData={topMoversData} windowSize={5} />
        </div>
    );
};

export default App;
