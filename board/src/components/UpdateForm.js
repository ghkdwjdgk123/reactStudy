import React, { useState } from 'react';
import axios from 'axios';

const UpdateForm = ({ existingPost, fetchPosts }) => {
  const [title, setTitle] = useState(existingPost.title);
  const [content, setContent] = useState(existingPost.content);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedPost = {
        bn: existingPost.bn, // 게시글 번호는 수정되지 않음
        title,
        content,
        writer: existingPost.writer,
        cr_id: 'admin',
        ur_id: 'admin', // 수정자 ID
      };

      // 게시글 수정 요청
      await axios.patch('http://localhost:8080/board/update', updatedPost);

      // 게시글 수정 후 목록 갱신
      fetchPosts();

      // 입력 폼 초기화
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <div className="board-form">
      <h3>게시글 수정</h3>
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
        <button type="submit">수정</button>
      </form>
    </div>
  );
};

export default UpdateForm;
