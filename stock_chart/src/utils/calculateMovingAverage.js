import _ from 'lodash';

// 일별 변화량 계산 함수
const calculateDailyChanges = (prices) => {
    return prices.map((price, index) => {
        if (index === 0) return 0;
        return price - prices[index - 1];
    });
};

// 이동 평균 계산 함수
const calculateMovingAverage = (prices, windowSize) => {
    return prices.map((price, index, array) => {
        if (index < windowSize - 1) return null; // 이동 평균을 계산할 수 없는 구간
        const window = array.slice(index - windowSize + 1, index + 1);
        return _.mean(window);
    });
};
