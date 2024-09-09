import React, { useState } from 'react';
import '../styles/formstyles.css';  // 스타일 파일을 import

const LoginForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, password }),
      })
      .then(res=>
        console.log(res.json())
      )
      
      if (!response.ok) {
        throw new Error('Login failed');
      }

      setSuccess(true);
      setError(null);
    } catch (err) {
      setError('Invalid credentials');
      setSuccess(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="id"
          placeholder="id"
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
      {error && <p className="error">{error}</p>}
      {success && <p className="success">Login successful!</p>}
    </div>
  );
};

export default LoginForm;
