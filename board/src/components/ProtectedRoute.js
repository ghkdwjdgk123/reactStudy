import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ isAuthenticated }) => {
  const location = useLocation();  // 현재 경로 정보

  if (!isAuthenticated) {
    // 인증되지 않은 경우, 로그인 페이지로 이동하며 현재 경로 정보를 state에 전달
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // 인증된 경우, 자식 라우트를 렌더링
  return <Outlet />;
};

export default ProtectedRoute;
