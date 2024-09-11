import React, { useState } from 'react';
import axios from 'axios';

const BoardForm = ({ fetchPosts }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [writer, setWriter] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newPost = {
        title,
        content,
        writer,
        cr_id: 'admin',  // 작성자 ID
        ur_id: 'admin',  // 수정자 ID
      };

      // 게시글 등록 요청
      await axios.post('http://localhost:8080/board/register', newPost);

      // 게시글 등록 후 목록 갱신을 위한 함수 호출
      fetchPosts();

      // 입력 폼 초기화
      setTitle('');
      setContent('');
      setWriter('');
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  return (
    <div className="board-form">
      <h3>새 게시글 작성</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="작성자"
          value={writer}
          onChange={(e) => setWriter(e.target.value)}
          required
        />
        <button type="submit">작성</button>
      </form>
    </div>
  );
};

export default BoardForm;
