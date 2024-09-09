import axios from 'axios';

// 주가 데이터를 API에서 가져오는 함수
export const fetchStockData = async (companyCode, startDate, endDate) => {
    try {
        const response = await axios.get('https://api.example.com/stockdata', {
            params: {
                companyCode,
                startDate,
                endDate,
                apiKey: 'zPh3ymgjnkcMzg75N5%2BrI%2FEbJdA4lrFh7r%2BGFARlUJs1vephZmT54X1eM%2Bc7M157VzytWbq6wqBk8ewEbmSTwA%3D%3D',
            },
        });

        // API에서 반환된 데이터를 원하는 형식으로 변환
        return {
            company: companyCode,
            dates: response.data.map(entry => entry.date),
            prices: response.data.map(entry => entry.close), // 예를 들어 종가(close) 데이터를 사용
        };
    } catch (error) {
        console.error('Error fetching stock data:', error);
        throw error;
    }
};
