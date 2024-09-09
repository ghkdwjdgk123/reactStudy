import React, { useState } from 'react';

const StockList = ({ onAddCompany }) => {
    const [companyCode, setCompanyCode] = useState('');

    const handleAddCompany = () => {
        if (companyCode.trim()) {
            onAddCompany(companyCode.trim());
            setCompanyCode('');
        }
    };

    return (
        <div>
            <h2>Add a Company</h2>
            <input
                type="text"
                value={companyCode}
                onChange={(e) => setCompanyCode(e.target.value)}
                placeholder="Enter company code"
            />
            <button onClick={handleAddCompany}>Add</button>
        </div>
    );
};

export default StockList;
