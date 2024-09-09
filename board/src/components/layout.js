import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </nav>
      <main>
        {/* 하위 컴포넌트들이 이 부분에 렌더링됩니다 */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
