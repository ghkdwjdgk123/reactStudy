import React, { useEffect } from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';

const Layout = ({ isAuthenticated, setIsAuthenticated }) => {
  const navigate = useNavigate();
  
  // 세션 확인 로직
  useEffect(() => {
    const checkSession = () => {
      const userId = sessionStorage.getItem('userId'); // 세션에서 사용자 ID 확인
      if (userId) {
        setIsAuthenticated(true);  // 로그인 상태 유지
      } else {
        setIsAuthenticated(false); // 로그인 상태 해제
      }
    };

    checkSession();
  }, [setIsAuthenticated]);

  // 로그아웃 처리
  const handleLogout = () => {
    sessionStorage.removeItem('userId');  // 세션에서 사용자 정보 제거
    setIsAuthenticated(false);  // 상태 변경
    navigate('/login');  // 로그인 페이지로 이동
  };

  return (
    <div>
      <header>
        {/* 네비게이션 바 */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>  {/* Link 사용 */}
            <li><Link to="/board">Board</Link></li>  {/* Link 사용 */}
            <li>
              {isAuthenticated ? (
                <button onClick={handleLogout}>Logout</button> 
              ) : (
                <Link to="/login">Login</Link> 
              )}
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Outlet을 사용해 하위 컴포넌트 렌더링 */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
