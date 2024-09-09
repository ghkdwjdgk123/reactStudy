import { useState, useEffect } from 'react';
import { fetchStockData } from './api/stockApi';

const useFetchStocks = (companyCodes, startDate, endDate) => {
    const [stockData, setStockData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const dataPromises = companyCodes.map(code => fetchStockData(code, startDate, endDate));
                const results = await Promise.all(dataPromises);
                setStockData(results);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        if (companyCodes.length > 0) {
            fetchData();
        }
    }, [companyCodes, startDate, endDate]);

    return { stockData, loading, error };
};

export default useFetchStocks;
