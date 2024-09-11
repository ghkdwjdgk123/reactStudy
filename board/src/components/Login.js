import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setIsAuthenticated }) => {
  const [id, setId] = useState('');  // 사용자 ID 상태
  const [password, setPassword] = useState('');  // 비밀번호 상태
  const [error, setError] = useState(null);  // 로그인 에러 상태
  const navigate = useNavigate();  // 페이지 이동을 위한 navigate 훅
  const location = useLocation();  // 로그인 전 원래 가고자 했던 경로

  // 'from' 경로: 사용자가 로그인 전 가려던 경로를 기억하거나, 기본값으로 홈('/')으로 이동
  const from = location.state?.from?.pathname || '/';

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // 로그인 요청 (Axios 사용)
      const response = await axios.post(
        'http://localhost:8080/user/login',  // 스프링 백엔드 로그인 API 엔드포인트
        { id, password },  // 사용자 ID와 비밀번호를 본문에 전달
        
      );

      if (response.status === 200) {
        setIsAuthenticated(true);  // 로그인 상태를 true로 설정
        setError(null);  // 에러를 초기화
        navigate(from, { replace: true });  // 로그인 후 원래 가고자 했던 경로로 리다이렉트
      }
    } catch (err) {
      setError('Invalid credentials');  // 로그인 실패 시 에러 메시지 설정
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}  {/* 에러 메시지 표시 */}
    </div>
  );
};

export default Login;
