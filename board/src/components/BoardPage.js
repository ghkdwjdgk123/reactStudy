import React, { useState } from 'react';
import BoardForm from './BoardForm';
import BoardList from './BoardList';

const BoardPage = () => {
  const [reload, setReload] = useState(false);  // 새로고침 트리거

  const triggerReload = () => {
    setReload(!reload);  // 글 작성 후 목록을 새로고침하기 위한 상태 변경
  };

  return (
    <div className="board-page">
      <h2>게시판</h2>
      <BoardForm fetchPosts={triggerReload} />  {/* 게시글 작성 폼 */}
      <BoardList reload={reload} />            {/* 게시글 목록 */}
    </div>
  );
};

export default BoardPage;
