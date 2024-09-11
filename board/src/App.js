import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BoardPage from './components/BoardPage';  // 게시판 페이지 (목록 + 글쓰기)
import UpdateForm from './components/UpdateForm'; // 게시글 수정 폼
import Home from './components/Home';            // 홈 페이지
import Login from './components/Login';          // 로그인 페이지
import ProtectedRoute from './components/ProtectedRoute';  // 인증된 사용자만 접근할 수 있는 보호된 경로
import Layout from './components/layout';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}>
          {/* 기본 경로로 홈 화면을 보여줍니다 */}
          <Route index element={<Home />} />

          {/* 로그인 페이지 */}
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />

          {/* 보호된 경로 설정 */}
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            {/* 게시판 페이지 (글 목록 및 글 작성) */}
            <Route path="/board" element={<BoardPage />} />

            {/* 게시글 수정 페이지 */}
            <Route path="/board/update/:id" element={<UpdateForm />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
