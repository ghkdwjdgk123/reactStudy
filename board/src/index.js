import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18에서는 createRoot 사용
import App from './App'; // App 컴포넌트를 import

// React 18에서는 createRoot로 렌더링을 수행
const root = ReactDOM.createRoot(document.getElementById('root')); // public/index.html에 있는 id="root" 요소를 사용

root.render(
  <React.StrictMode>
    <App /> {/* App 컴포넌트 전체를 렌더링 */}
  </React.StrictMode>
);
