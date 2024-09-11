import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BoardList = () => {
  const [boardData, setBoardData] = useState([]);  // 게시글 목록
  const [currentPage, setCurrentPage] = useState(1);  // 현재 페이지
  const [totalPages, setTotalPages] = useState(1);  // 전체 페이지 수
  const [loading, setLoading] = useState(false);  // 로딩 상태

  const fetchBoardData = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:8080/board?pageNo=${page}`);
      console.log(response);
      setBoardData(response.data.boardList);  // 서버에서 받은 게시글 목록
      setTotalPages(response.data.totalPage);  // 전체 페이지 수
    } catch (error) {
      
      console.error('Error fetching board data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBoardData(currentPage);  // 컴포넌트가 마운트될 때 현재 페이지에 해당하는 데이터를 가져옴
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);  // 페이지 번호 변경
  };

  return (
    <div>
      <h2>Board List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {boardData.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
              <p>작성자: {item.writer}</p>
            </li>
          ))}
        </ul>
      )}
      
      {/* 페이지네이션 버튼 */}
      <div>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            disabled={page === currentPage}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BoardList;
